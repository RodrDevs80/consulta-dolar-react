import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Contexto } from "../contexto/Contexto";

export const BilleterasVirtuales = () => {
  const { billeteras, fetchBilleteras } = useContext(Contexto);
  useEffect(() => {
    fetchBilleteras();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="tarjetas">
        {billeteras &&
          billeteras.map((billetera) => (
            <div className="card" key={billetera.id}>
              <img
                src={`./src/assets/img/${billetera.imagen}`}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <Link
                  style={{ fontSize: "2em" }}
                  to={`/billetera/${billetera.id}`}
                  className="card-title"
                >
                  {billetera.billetera}
                </Link>
                <div className="card-text">
                  <strong>Tasa Nominal Anual (TNA): {billetera.TNA}</strong>
                  <hr />
                  <strong>Tasa Efectiva Anual (TEA): {billetera.TEA}</strong>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
