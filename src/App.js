import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Contas from "./Paginas/contasPagar";
import Home from "./Paginas/home";
import ListaCompras from "./Paginas/listaCompras";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="listacompras" element={<ListaCompras />} />
          <Route path="contaspagar" element={<Contas />} />
      </Routes>
  );
}