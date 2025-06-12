import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './Components/Layout.jsx'
import Contactos from './Components/Contactos.jsx'
import Nosotros from './Components/Nosotros.jsx'
import Productos from './Components/Productos.jsx'
import Notfound from './Components/Notfound.jsx'
import Home from './Components/Home.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
              <Route index element={<Home />}></Route>
              <Route path="/quienes-somos" element={<Nosotros/>}></Route>
              <Route path="/productos" element={<Productos/>}></Route>
              <Route path="/productos/:idCelular" element={<Productos />} ></Route>
              <Route path="/contactos" element={<Contactos/>}></Route>
              <Route path="*" element={<Notfound/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
