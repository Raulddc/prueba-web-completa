import { FC } from "react";
import { PaymentButton1 } from "../shared/payment1";

const Afiliados: FC = () => {
  
  return (
    <>
        <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>
        <h1 className="text-center title text-[60px] ">PROGRAMA DE AFILIADOS</h1>
        <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>

        <div
        id="who"
        className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
        >
            <img
            data-scroll
            data-scroll-speed="2"
            className="w-[450px] h-[600px] rounded-[12px]"
            src="freepick1.jpg"
            alt=""
            style={{
                maxWidth: "50%",
                maxHeight: "100%",
                width: "auto",
                height: "auto",
                objectFit: 'contain',
                borderRadius: "20px",
            }}
            />
            <div style={{ textAlign: "justify", }}>
                <h1 className="text-2xl mb-4">
                A quien va dirigido:
                </h1>
                    <p>
                    Este programa está diseñado para aquellos entusiastas y apasionados por el deporte y el entrenamiento que desean compartir su progreso y trabajo con sus seguidores. Si tienes una presencia en redes sociales o un sitio web relacionado con deportes y entrenamiento, entonces este programa es para ti.
                    </p>
                    <br></br><br></br>
                <h1 className="text-2xl mb-4">
                Ventajas de ser un afiliado:
                </h1>    
                    <p>-Programas al 50%</p>
                    <p>-Relación más cercana</p>
                    <p>-Los primeros en acceder a nuevas funcionalidades</p>
                
            </div>
            
        </div>
        <div
        id="who"
        className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
        >
            
            <div style={{ textAlign: "justify", }}>
                <h1 className="text-2xl mb-4">
                Requisitos:
                </h1>    
                    <p>
                    Para formar parte de nuestro programa de afiliados, es necesario tener redes sociales activas relacionadas con el deporte y entrenamiento. A parte, es necesario demostrar un compromiso con la promoción de nuestros programas de entrenamiento. 
                    </p>
                    <br></br><br></br>
                <p>
                Rellena el formulario que se encuentra más abajo para optar a ser uno de nuestros Afiliados y comienza a aprovechar los beneficios exclusivos en nuestros programas de entrenamiento.
                </p>
                <p>
                Tras un periodo de estudio, recivirá información al respecto a través del correo proporcionado.
                </p>
                
            </div>
            <img
                data-scroll
                data-scroll-speed="2"
                className="w-[450px] h-[600px] rounded-[12px]"
                src="freepick2.jpg"
                alt=""
                style={{
                    maxWidth: "50%",
                    maxHeight: "100%",
                    width: "auto",
                    height: "auto",
                    objectFit: 'contain',
                    borderRadius: "20px",
            }}
            />
            
        </div>

        <div className="flex justify-center">
        <iframe width="600" height="880" src="https://ebc0809d.sibforms.com/serve/MUIEAGFWSxd6O3HX4n8s_JcBaEtCl9z3ktm3TVCX72KlNJMIt8LoneVJaARqBvwODVxu4VE2g1Ep-MtfrFbgJJcpruTPSOzPvqwmUhC2mNKDZ7MG7Zy5t-L8ezuAl6lWTsOVKUdiWNu1xaG75Ixl8u7T223vtcRVtMLfG4PbI5IIzFnsGHck_sr7IgLlt7dWnE4OmHgJHhLjCCkS" ></iframe>
        </div>
        

    </>
  );
  };

export default Afiliados;