import * as React from "react";
import { Routes, Route} from "react-router-dom";
import Home from "./Paginas/home";
import ListaCompras from "./Paginas/listaCompras";

export default function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
          <Route path="listacompras" element={<ListaCompras />} />
      </Routes>
  );
}