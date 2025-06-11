import '../Css/Nosotros.css'
import oficina1 from '../assets/oficina1.jpg'
import oficina2 from '../assets/oficina2.jpg'

function Nosotros(){
    return(
        <div className="nosotros-container">
            <h1>Nuestro equipo</h1>
            <p>
                Somos Indiana S. y Sol I., las fundadoras de esta compañía de telefonía. Con experiencia en el sector, decidimos crear una empresa enfocada en ofrecer servicios de comunicación claros, confiables y adaptados a las necesidades reales de nuestros clientes.
                Nuestro compromiso es brindar soluciones tecnológicas de alta calidad acompañadas de un trato personalizado y eficiente. Creemos que una comunicación sencilla y sin complicaciones es clave para conectar a las personas y fortalecer relaciones.
                Esta empresa nació con la visión de transformar la forma en que las personas se comunican, ofreciendo un servicio transparente y cercano, con un enfoque profesional y responsable.
                Gracias por elegirnos y permitirnos ser parte de tu día a día.
            </p>
            <div className="nosotros-imagenes">
                <img src={oficina1} alt="Oficina 1" />
                <img src={oficina2} alt="Oficina 2" />
            </div>
        </div>
    )
}
export default Nosotros;
