import { useEffect, useState } from "react";
import { Busqueda } from "./Busqueda";
import { useNavigate } from "react-router-dom";
import { BilleterasVirtuales } from "./BilleterasVirtuales";
import { InfoTNATEA } from "./InfoTNATEA";
import { TasaBancos } from "./TasaBancos";

export const InfoDolar = () => {
  const navegar = useNavigate();
  const [dolares, setDolares] = useState([]);
  const [valor, setValor] = useState("");
  const fetchDolar = async () => {
    try {
      const response = await fetch("https://dolarify-api.vercel.app/api/dolar");
      const data = await response.json();
      const arrayData = Object.entries(data);
      //arrayData.forEach((item) => console.log(item[0]));
      //arrayData.forEach((item) => console.log(item[1].name));
      const busqueda = arrayData.filter((item) =>
        item[1].name.toLowerCase().includes(valor.toLowerCase())
      );
      setDolares(busqueda ? busqueda : arrayData);
    } catch (error) {
      navegar("/error");
      console.log(error);
    }
  };
  useEffect(() => {
    fetchDolar();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [valor]);

  return (
    <>
      <h1>Cotización de los distintos tipos de Dolar en la Argentina</h1>
      <Busqueda valor={valor} setValor={setValor} />
      <table className="table table-striped table-hover mt-5 shadow-lg shadow-lg p-3 mb-5 bg-body-tertiary rounded-3">
        <thead>
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Denominación</th>
            <th scope="col">Compra</th>
            <th scope="col">Venta</th>
            <th scope="col">Año</th>
            <th scope="col">Variación</th>
          </tr>
        </thead>
        {dolares.length === 0 ? (
          <tbody>
            <tr>
              <td scope="row" rowSpan="4">
                <span>Cargando...</span>
                <img
                  className="load"
                  src="./src/assets/img/cargarndo.svg"
                  alt="load"
                  width="40px"
                />
              </td>
            </tr>
          </tbody>
        ) : (
          dolares.map((dolar) => (
            <tbody key={dolar[0]}>
              <tr>
                <th scope="row">{`${dolar[0]
                  .slice(0, 5)
                  .toUpperCase()}  ${dolar[0].slice(5).toUpperCase()}`}</th>
                <td>{dolar[1].name}</td>
                <td>{dolar[1].compra}</td>
                <td>{dolar[1].venta}</td>
                <td>{new Date().getFullYear()}</td>
                <td
                  style={
                    !dolar[1].variacion
                      ? { color: "gray" }
                      : dolar[1].variacion < 0
                      ? {
                          color: "white",
                          background: "#FFCFB3",
                        }
                      : {
                          color: "white",
                          background: "#73EC8B",
                        }
                  }
                >
                  {dolar[1].variacion
                    ? dolar[1].variacion
                    : "Sin variación disponible"}
                </td>
              </tr>
            </tbody>
          ))
        )}
      </table>
      <hr />
      <InfoTNATEA />
      <h2>TNA y TEA de Billeteras Virtuales</h2>
      <BilleterasVirtuales />
      <h2>TNA y TEA de Bancos</h2>
      <TasaBancos />
    </>
  );
};
