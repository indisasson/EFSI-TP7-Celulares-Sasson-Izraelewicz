import { marcas, celulares } from './data.js';
import '../Css/Productos.css'

function Productos(){
    
    return( /*cuando pones el id celular 1, te tiene que aparecer productos, pero solo con el producto de id 1*/ 
        <>
            <div className="productos-view">
            <h1 className='titulo'>Productos disponibles</h1>
            {celulares.map(c => (
                <div key={c.id} className="producto">
                    <h3>{c.nombre}</h3>
                    <p>{c.descripcion}</p>
                    <p>Precio: ${c.precio}</p>
                    <p className="marca">Marca: {marcas.find(m => m.id === c.marcaId)?.nombre}</p>
                    <div className="fotos">
                        {c.fotos.map((foto, index) => (
                        <img key={index} src={foto} alt={c.nombre} />
                        ))}
                    </div>
                </div>
            ))}
            </div>

        </>
        
    )
}
export default Productos;