import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { celulares } from "./data";
import '../Css/Home.css'


function Home () {
  const fotos = [
    "https://www.janado.de/cdn/shop/files/motorola-edge-40-pro-lunar-blue-pn.png?v=1739365661",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTMC-juA7jJPPv1Ih3LRp0I7ZUFRAVgndTiA&s",
    "https://images.samsung.com/is/image/samsung/p6pim/ar/sm-s721blbmaro/gallery/ar-galaxy-s24-fe-s721-sm-s721blbmaro-543972545?$684_547_PNG$",
    "https://i5.walmartimages.com/seo/Pre-Owned-Apple-iPhone-14-Pro-256GB-Deep-Purple-Unlocked-MQ1D3LL-A-Refurbished-Good_36eab993-bd5b-4b25-bb56-08d46551b7b7.516c6b9965ca06d0641ea70de9326a27.jpeg",
    "https://i5.walmartimages.com/seo/Used-Apple-iPhone-14-Pro-Max-128GB-Gold-T-Mobile-MQ8Q3LL-A-Used-Good-Condition_7ad525f3-bb31-4d74-865e-2ebfbe887d90.921fbc6b84ba1d45c22066d7e6ff026f.jpeg"
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <>
      <h1>¡Bienvenido a CeluStar!</h1>
      <p>
        Explora la mejor selección de celulares de las marcas más reconocidas del mercado. 
        Aquí encontrarás dispositivos de última generación, con las últimas tecnologías y 
        a precios que se ajustan a tu presupuesto. Ya sea que busques potencia, cámara, 
        diseño o duración de batería, en CeluStar tenemos el celular perfecto para vos. 
        ¡Descubrí, compará y elegí el tuyo con confianza! Porque conectarte con lo que 
        más importa nunca fue tan fácil.
      </p>

      <Slider {...settings}>
        {fotos.map((foto, i) => (
          <div key={i}>
            <img src={foto} alt={`Foto ${i + 1}`} />
          </div>
        ))}
      </Slider>

      <h3>Celulares destacados</h3>
      <div className="cards-container">
        {celulares.map((celular) => (
          <div key={celular.id} className="celular-card">
            <img
              src={celular.fotos[Math.floor(Math.random() * celular.fotos.length)]}
              alt={celular.nombre}
              className="celular-img"
            />
            <h4>{celular.nombre}</h4>
            <p>{celular.descripcion}</p>
            <strong>${celular.precio}</strong>
          </div>
        ))}
      </div>
    </>
  );
}

export default Home;
