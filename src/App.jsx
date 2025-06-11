import { BrowserRouter, Route, Routes } from 'react-router'
import './App.css'
import Layout from './Components/Layout.jsx'
import Contactos from './Components/Contactos.jsx'
import Nosotros from './Components/Nosotros.jsx'
import Productos from './Components/Productos.jsx'
import Notfound from './Components/Notfound.jsx'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout/>}>
              <Route path="/quienes-somos" element={<Nosotros/>}></Route>
              <Route path="/productos" element={<Productos/>}></Route>
              <Route path="/contactos" element={<Contactos/>}></Route>
              <Route path="*" element={<Notfound/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
