export const Footer = () => {
  return (
    <>
      <footer
        className="text-center text-lg-start text-white"
        style={{ backgroundColor: "#929fba" }}
      >
        <div className="container p-4 pb-0">
          <section>
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  FinanzasYA💰
                </h6>
                <p>
                  Es una plataforma digital diseñada para ofrecer a los usuarios
                  argentinos una visión completa y actualizada del panorama
                  financiero del país. La página se posiciona como un referente
                  en materia de información económica, brindando datos precisos
                  y fáciles de entender sobre el mercado cambiario, las
                  billeteras virtuales y las tasas de interés de los principales
                  bancos.
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Paginas Importantes
                </h6>
                <p>
                  <a
                    href="https://www.argentina.gob.ar/economia/finanzas"
                    className="text-white"
                    target="_blank"
                  >
                    Pagina Oficial de finanzas del Gobierno de Argentina
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.asap.org.ar/"
                    className="text-white"
                    target="_blank"
                  >
                    Asociación Argentina de Presupuesto y Administración
                    Financiera Publica
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.lanacion.com.ar/tema/finanzas-tid48750/"
                    className="text-white"
                    target="_blank"
                  >
                    La Nación Finanzas
                  </a>
                </p>
                <p>
                  <a
                    href="https://www.boletinoficial.gob.ar/detalleAviso/primera/290421/20230717"
                    className="text-white"
                  >
                    Boletín Oficial
                  </a>
                </p>
              </div>

              <hr className="w-100 clearfix d-md-none" />

              <hr className="w-100 clearfix d-md-none" />

              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Contacto
                </h6>
                <p>
                  <i className="fas fa-home mr-3"></i> Añatuya, Santiago del
                  Estero, AR
                </p>
                <p>
                  <i className="fas fa-envelope mr-3"></i> rodr26707@gmail.com
                </p>
                <p>
                  <i className="fas fa-phone mr-3"></i> + 01 234 567 88
                </p>
                <p>
                  <i className="fas fa-print mr-3"></i> + 01 234 567 89
                </p>
              </div>

              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">
                  Síganos
                </h6>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#3b5998" }}
                  href="https://www.facebook.com/?locale=es_LA"
                  role="button"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#55acee" }}
                  href="https://x.com/?lang=es&mx=2"
                  role="button"
                >
                  <i className="fab fa-twitter"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#dd4b39" }}
                  href="https://www.google.com/?hl=es"
                  role="button"
                >
                  <i className="fab fa-google"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#ac2bac" }}
                  href="https://www.instagram.com/"
                  role="button"
                >
                  <i className="fab fa-instagram"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#0082ca" }}
                  href="www.linkedin.com/in/carlos-rodriguez-developerwebjr"
                  role="button"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  className="btn btn-primary btn-floating m-1"
                  style={{ backgroundColor: "#333333" }}
                  href="https://github.com/RodrDevs80"
                  role="button"
                >
                  <i className="fab fa-github"></i>
                </a>
              </div>
            </div>
          </section>
        </div>

        <div
          className="text-center p-3"
          style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
        >
          © 2024 Copyright:
          <a className="text-white" href="https://mdbootstrap.com/">
            Bad💀design
          </a>
        </div>
      </footer>
    </>
  );
};
