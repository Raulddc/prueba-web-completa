import { FC } from "react";
import { FaShoppingBasket } from "react-icons/fa";
import { PaymentButton1 } from "../shared/payment1";
import { PaymentButton2 } from "../shared/payment2";
import { PaymentButton3 } from "../shared/payment3";

const ServiciosPage: FC = () => {
  
  return (
    <>
    <p data-scroll className="text-lg text-gray-200" id="story">
      <br></br>
    </p>
    <p data-scroll className="text-lg text-gray-200" id="story">
      <br></br>
    </p>
    <h1 className="text-center title text-[60px] ">SERVICIOS</h1>
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
      src="HI.jpg"
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
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
        HIPERTROFIA
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
        Programa de ganancia de masa muscular. Implementación de sistemas y metodologías de 
        entrenamiento que favorecen la hipertrofia, se focaliza en ejercicios analíticos 
        y está dirigido tanto para población general que busque mantener la masa 
        muscular, como para atletas que quieran llevar su cuerpo al siguiente nivel.
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>

        <p data-scroll className="text-lg text-gray-200" id="story">
          Incluye:
        </p>  
        <p data-scroll className="text-lg text-gray-200" id="story">
          Evaluación inicial (Valoración funcional completa + datos médicos).
        </p> 
        <p data-scroll className="text-lg text-gray-200" id="story">
          Asesoría inicial (Objetivos, metodología y dudas).
        </p> 
        <p data-scroll className="text-lg text-gray-200" id="story">
          Adaptación de los microciclos en función de como responda cada cliente 
          gracias a un sistema de feedback y cuantificación del esfuerzo.
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
          Progresión (Medidas antropométricas y tests de fuerza periódicamente).
        </p> 
        <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
          Reserva ya !!
        </p> 

        <div className="flex mt-[25px] gap-[20px]">
              
              <a
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#191e25]"
                onClick={PaymentButton1()}
              >

                <span> RESERVAR </span>
                <FaShoppingBasket size={25} />
              </a>
              
            </div>
      </div>
      
    </div>
    <br></br>
    <br></br>
    <br></br>
 
    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <img
      data-scroll
      data-scroll-speed="2"
      className="w-[450px] h-[600px] rounded-[12px]"
      src="FUERZA.jpg"
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
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
        FUERZA
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
        Programación enfocada a la mejora de la fuerza mediante hipertrofia 
        sarcomérica y cordinación intramuscular, tanto de forma funcional 
        como específica para deportes como powerlifting.
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>

        <p data-scroll className="text-lg text-gray-200" id="story">
          Incluye:
        </p>  
        <p data-scroll className="text-lg text-gray-200" id="story">
          Evaluación inicial (Valoración funcional completa + datos médicos).
        </p> 
        <p data-scroll className="text-lg text-gray-200" id="story">
          Asesoría inicial (Objetivos, metodología y dudas).
        </p> 
        <p data-scroll className="text-lg text-gray-200" id="story">
          Adaptación de los microciclos en función de como responda cada cliente 
          gracias a un sistema de feedback y cuantificación del esfuerzo.
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
          Progresión (Medidas antropométricas y tests de fuerza periódicamente).
        </p> 
        <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
          Reserva ya !!
        </p> 

        <div className="flex mt-[25px] gap-[20px]">
              <a
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#191e25]"
                onClick={PaymentButton2()}
              >
                <span> RESERVAR </span>
                <FaShoppingBasket size={25} />
              </a>
              
            </div>
      </div>
      
      
    </div>

    <br></br>
    <br></br>
    <br></br>


    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
    >
      <img
      data-scroll
      data-scroll-speed="2"
      className="w-[450px] h-[600px] rounded-[12px]"
      src="ADELGAZAR.jpg"
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
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
        ADELGAZAR
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
        Programa de entrenamiento focalizado en la utilización de las vías 
        energéticas de las grasas y en el ejercicio de alta intensidad (HIT), no solo mediante el trabajo funcional en 
        circuitos metabólicos si no, también, mediante trabajo cardiovascular 
        contínuo y variable.
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>

        <p data-scroll className="text-lg text-gray-200" id="story">
          Incluye:
        </p>  
        <p data-scroll className="text-lg text-gray-200" id="story">
          Evaluación inicial (Valoración funcional completa + datos médicos).
        </p> 
        <p data-scroll className="text-lg text-gray-200" id="story">
          Asesoría inicial (Objetivos, metodología y dudas).
        </p> 
        <p data-scroll className="text-lg text-gray-200" id="story">
          Adaptación de los microciclos en función de como responda cada cliente 
          gracias a un sistema de feedback y cuantificación del esfuerzo.
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
          Progresión (Medidas antropométricas y tests de fuerza periódicamente).
        </p> 
        <p data-scroll className="text-lg text-gray-200" id="story">
        <br></br>
        </p>
        <p data-scroll className="text-lg text-gray-200" id="story">
          Reserva ya !!
        </p> 

        <div className="flex mt-[25px] gap-[20px]">
              <a
                className="h-[45px] px-[15px] text-white rounded transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#191e25]"
                onClick={PaymentButton3()}
              >
                <span> RESERVAR </span>
                <FaShoppingBasket size={25} />
              </a>
              
            </div>
      </div>
      
    </div>
    <p data-scroll className="text-lg text-gray-200" id="story">
      <br></br>
    </p>
    <p data-scroll className="text-lg text-gray-200" id="story">
      <br></br>
    </p>

    </>
  );
  };

export default ServiciosPage;