import { marcas, celulares } from "./data.js";
import "../Css/Productos.css";
import { useParams } from "react-router-dom";

function Productos() {
  let { idCelular, idMarca } = useParams();
  idCelular = Number(idCelular) || -1; 
  idMarca = Number(idMarca) || -1; /*ver idMara */

  return (
    <>
      <div className="productos-view">
        <h1 className="titulo">Productos disponibles</h1>

        {celulares.map((c) =>
          c.id == idCelular || idCelular == -1 ? (
            <div key={c.id} className="producto">
              <h3>{c.nombre}</h3>
              <p>{c.descripcion}</p>
              <p>Precio: ${c.precio}</p>
              <p className="marca">
                Marca: {marcas.find((m) => m.id === c.marcaId)?.nombre}
              </p>
              <div className="fotos">
                {c.fotos.map((foto, index) => (
                  <img key={index} src={foto} alt={c.nombre} />
                ))}
              </div>
            </div>
          ) : (
            console.log(c.id == idCelular || idCelular == -1)
          )
        )}
      </div>
    </>
  );
}
export default Productos;
