// eslint-disable-next-line react/prop-types
export const Busqueda = ({ valor, setValor }) => {
  return (
    <>
      <div className="m-4">
        <input
          className="form-control"
          type="text"
          placeholder="búsqueda por nombre"
          value={valor}
          onChange={(e) => setValor(e.target.value)}
        />
      </div>
    </>
  );
};
