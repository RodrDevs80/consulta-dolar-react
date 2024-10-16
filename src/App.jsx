import { Route, Routes } from "react-router-dom";
import { InfoDolar } from "./compomentes/InfoDolar";
import { Error404 } from "./compomentes/Error404";
import { Billetera } from "./compomentes/Billetera";

function App() {
  return (
    <main>
      <Routes>
        <Route path="/" element={<InfoDolar />} />
        <Route path="/error" element={<Error404 />} />
        <Route path="/billetera/:id" element={<Billetera />} />
      </Routes>
    </main>
  );
}

export default App;
