import { useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { Contexto } from "../contexto/Contexto";

export const TasaBancos = () => {
  const { bancos, fetchBancos } = useContext(Contexto);

  useEffect(() => {
    fetchBancos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className="tarjetas">
        {bancos &&
          bancos.map((banco) => (
            <div className="card" id="card" key={banco.id}>
              <img
                src={`./src/assets/img/${banco.imagen}`}
                className="card-img-top"
                alt={banco.alias}
              />
              <div className="card-body">
                <Link
                  style={{ fontSize: "2em" }}
                  to={banco.url}
                  className="link-warning link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  target="_blank"
                >
                  {banco.alias}
                </Link>
                <div className="card-text">
                  <strong>Tasa Nominal Anual (TNA): {banco.TNA}</strong>
                  <hr />
                  <strong>Tasa Efectiva Anual (TEA): {banco.TEA}</strong>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
