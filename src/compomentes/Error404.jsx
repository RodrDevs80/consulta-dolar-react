import { useNavigate } from "react-router-dom";

export const Error404 = () => {
  const navegar = useNavigate();
  const volver = () => {
    navegar("/");
  };
  return (
    <>
      <div className="d-flex justify-content-center flex-column m-4">
        <button className="btn btn-primary" onClick={volver}>
          Volver a intentar
        </button>
        <img src="./src/assets/img/error404.png" alt="error" />
      </div>
    </>
  );
};
