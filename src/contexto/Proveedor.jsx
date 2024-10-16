import { useState } from "react";
import { Contexto } from "./Contexto";

const itemsBilleteras = [
  {
    id: 0,
    billetera: "Naranja X",
    pagina: "https://www.naranjax.com",
    origen:
      "Derivada de la tarjeta Naranja, Naranja X se creó para ofrecer servicios de pago digitales y soluciones financieras ágiles.",
    caracteristicas: [
      "Pagos en comercios",
      "Transferencias entre usuarios",
      "Tarjeta prepaga internacional",
      "Inversiones en fondos",
    ],
    imagen: "../src/assets/img/naranja.png",
    servicios: ["Naranja X Préstamos", "Naranja X Seguros"],
    valor_mercado: "Popular en Argentina",
  },
  {
    id: 1,
    billetera: "Prex",
    pagina: "https://www.prex.com",
    origen:
      "Inició como una billetera para facilitar pagos y transferencias en Uruguay y se ha expandido a otros mercados como Argentina y Paraguay.",
    caracteristicas: [
      "Pagos en comercios",
      "Transferencias internacionales",
      "Tarjeta prepaga Mastercard",
      "Compra de criptomonedas",
    ],
    imagen: "../src/assets/img/prex.png",
    servicios: ["Prex Mastercard", "Préstamos personales"],
    valor_mercado: "Fuerte presencia en Uruguay y expansión en Argentina",
  },
  {
    id: 2,
    billetera: "Mercado Pago",
    pagina: "https://www.mercadopago.com",
    origen:
      "Nacida como una plataforma de pagos para Mercado Libre, se expandió rápidamente para convertirse en una de las billeteras virtuales más populares de Latinoamérica.",
    caracteristicas: [
      "Pagos en comercios físicos y online",
      "Transferencias entre usuarios",
      "Recarga de celular",
      "Compra de criptomonedas",
    ],
    imagen: "../src/assets/img/mp.jfif",
    servicios: ["Mercado Envíos", "Mercado Crédito", "Mercado Pago Point"],
    valor_mercado: "Líder del mercado en Argentina",
  },
  {
    id: 3,
    billetera: "Personal Pay",
    pagina: "https://www.personal.com",
    origen:
      "Lanzada por la empresa de telecomunicaciones Personal, ofrece servicios financieros y de pago vinculados a su red móvil.",
    caracteristicas: [
      "Pagos en comercios físicos y online",
      "Transferencias entre usuarios",
      "Recarga de celular",
      "Pago de servicios",
    ],
    imagen: "../src/assets/img/personal.png",
    servicios: ["Personal Pay Crédito", "Recarga automática"],
    valor_mercado: "Enfocada en usuarios de Personal en Argentina",
  },
  {
    id: 4,
    billetera: "ClaroPay",
    pagina: "https://www.claro.com",
    origen:
      "Billetera virtual de la empresa de telecomunicaciones Claro, diseñada para simplificar los pagos y recargas móviles.",
    caracteristicas: [
      "Pagos en comercios",
      "Transferencias entre usuarios",
      "Recarga de celular",
      "Pago de servicios",
    ],
    imagen: "../src/assets/img/claro.jfif",
    servicios: ["Claro Crédito", "Recarga automática"],
    valor_mercado: "Focalizada en la base de usuarios Claro en Latinoamérica",
  },
];
const imgBancos = [
  "banco-nacion.png",
  "santander.jfif",
  "galicia.png",
  "provincia.png",
  "frances.png",
  "macro.png",
  "hsbc.png",
  "credicoop.png",
  "ciudad.jfif",
  "hipotecario.png",
];
const bancosLink = [
  "https://www.bn.com.ar/",
  "https://www.santander.com.ar/",
  "https://www.galicia.com.ar/",
  "https://www.bancoprovincia.com.ar/",
  "https://www.bbva.com.ar/",
  "https://www.bancomacro.com.ar/",
  "https://www.hsbc.com.ar/",
  "https://www.credicoop.coop.ar/",
  "https://www.bancociudad.gob.ar/",
  "https://www.bancohipotecario.com.ar/",
];

// eslint-disable-next-line react/prop-types
export const Proveedor = ({ children }) => {
  const [billeteras, setBilleteras] = useState([]);
  const [bancos, setBancos] = useState([]);
  const imagenes = [
    "naranja.png",
    "prex.png",
    "mp.jfif",
    "personal.png",
    "claro.jfif",
  ];
  const fetchBilleteras = async () => {
    try {
      const reponse = await fetch(
        "https://dolarify-api.vercel.app/api/billeteras"
      );
      const data = await reponse.json();
      let dataMod = [...data];
      dataMod.shift();
      dataMod = [
        ...dataMod.map((item, indice) =>
          item ? { ...item, imagen: imagenes[indice], id: indice } : null
        ),
      ];
      setBilleteras(dataMod);
    } catch (error) {
      console.log(error);
    }
  };
  const fetchBancos = async () => {
    try {
      const reponse = await fetch("https://dolarify-api.vercel.app/api/plazos");
      const data = await reponse.json();
      let dataMod = [...data];
      dataMod = [
        ...dataMod.map((item, indice) =>
          item
            ? {
                ...item,
                imagen: imgBancos[indice],
                id: indice,
                url: bancosLink[indice],
              }
            : null
        ),
      ];
      setBancos(dataMod);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Contexto.Provider
      value={{
        billeteras,
        setBilleteras,
        fetchBilleteras,
        itemsBilleteras,
        imgBancos,
        bancosLink,
        bancos,
        setBancos,
        fetchBancos,
      }}
    >
      {children}
    </Contexto.Provider>
  );
};
