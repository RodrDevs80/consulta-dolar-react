export const Navbar = () => {
  return (
    <nav className="navbar bg-dark border-bottom border-body">
      <div className="container-fluid">
        <a
          href="https://datos.gob.ar/vi/dataset/sspm-informacion-economica-al-dia"
          className="navbar-brand"
          target="_blank"
        >
          <img
            src="../src/assets/img/logoNav.svg"
            alt="Logo"
            width="50px"
            className="d-inline-block align-text-top"
          />
        </a>
        <h1
          style={{ color: "white", marginRight: "15px", fontFamily: "fantasy" }}
        >
          FinanzasYA💰
        </h1>
      </div>
    </nav>
  );
};
