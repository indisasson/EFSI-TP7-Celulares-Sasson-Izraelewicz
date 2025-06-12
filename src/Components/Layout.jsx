import { Link, Outlet } from "react-router-dom"
import '../Css/Layout.css'
import logo from '../assets/logo.png'
import {celulares } from './data.js';

function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="nav-container">
          <img src={logo} alt="Logo" className="logo" />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/quienes-somos">Nosotros</Link>
            <Link to="/productos">Productos</Link>
            { celulares.map(c => <Link to={`/productos/${c.id}`}>Celular {c.nombre}</Link> ) }
            <Link to="/contactos">Contactos</Link>
          </nav>
        </div>
      </header>

      <main className="main-content">
        <Outlet />
      </main>

      <footer className="site-footer">
        <p>© 2025 Tu Empresa. Todos los derechos reservados.</p>
      </footer>
    </>
  )
}

export default Layout
