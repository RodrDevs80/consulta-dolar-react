import { useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { Contexto } from "../contexto/Contexto";

export const Billetera = () => {
  const idBilletera = useParams();
  const { itemsBilleteras } = useContext(Contexto);
  const billetera = itemsBilleteras.find(
    (item) => item.id === Number(idBilletera.id)
  );
  console.log(billetera);
  return (
    <>
      <div className="card mb-3">
        <div id="img-card">
          <img
            src={billetera.imagen}
            className="card-img-top"
            alt={billetera.billetera}
          />
        </div>
        <div className="card-body">
          <h2 className="card-title">
            Billetera Virtual:{billetera.billetera}
          </h2>
          <h3 className="card-text">{billetera.origen}</h3>
          <p>
            <a
              href={billetera.pagina}
              className="link-info link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
              target="_blank"
            >
              Info link
            </a>
          </p>
          <h2 className="card-title">Características</h2>
          {billetera.caracteristicas.map((item, index) => (
            <ul className="list-group" key={index}>
              <li className="list-group-item list-group-item-action list-group-item-primary">
                {item}
              </li>
            </ul>
          ))}
          <h2 className="card-title">Servicios</h2>
          {billetera.servicios.map((item, index) => (
            <ul className="list-group" key={index}>
              <li className="list-group-item list-group-item-action list-group-item-success">
                {item}
              </li>
            </ul>
          ))}
          <p className="card-text">
            <small className="text-body-secondary">
              {billetera.valor_mercado}
            </small>
          </p>
        </div>
      </div>
      <button className="btn btn-primary">
        <Link to={"/"} style={{ color: "white", textDecoration: "none" }}>
          Volver
        </Link>
      </button>
    </>
  );
};
