import { Link, Outlet } from "react-router-dom";
import "../Css/Layout.css";
import logo from "../assets/logo.png";
import { marcas } from './data.js';

function Layout() {
  return (
    <>
      <header className="site-header">
        <div className="nav-container">
          <img src={logo} alt="Logo" className="logo" />
          <nav>
            <Link to="/">Home</Link>
            <Link to="/quienes-somos">Nosotros</Link>
            <div className="dropdown">
              <span className="dropdown-title">Productos ▾</span>
              <div className="dropdown-content">
                <Link to="/productos">Ver todos</Link>
                {marcas.map((marca) => (
                  <Link key={marca.id} to={`/productos/marca/${marca.id}`}>
                    {marca.nombre}
                  </Link>
                ))}
              </div>
            </div>
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
  );
}

export default Layout;
