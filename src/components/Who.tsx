import { FC, useState, useEffect, useRef } from "react";


const Who: FC = () => {
  
  const videoRef = useRef<HTMLVideoElement>(null);
  
  return (
    <>

    <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ height: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <p style={{ fontSize: "8vmin", whiteSpace: 'nowrap', overflow: 'hidden' }}>
              <a>WORKOUT - EAT - SLEEP - WORKOUT - EAT - SLEEP - WORKOUT - EAT - SLEEP</a>
          </p>
        </div>

        
          
          
         
        <div style={{ height: '10%', display: 'flex', justifyContent: 'center', alignItems: 'center', maxHeight: '10%',}}>
          <div style={{ fontSize: "8vmin", whiteSpace: 'nowrap', overflow: 'hidden' }}>
              <a>EAT - SLEEP - WORKOUT - EAT - SLEEP - WORKOUT - EAT - SLEEP - WORKOUT</a>
          </div>
        </div>
    </div>


    <div
      id="who"
      className="flex gap-[5vw] px-[5vw] lg:px-[15vw] z-[2] lg:min-h-[70vh] items-center justify-center flex-col md:flex-row"
      style={{ width: "100%"}}
    >
      <img
        data-scroll
        data-scroll-speed="2"
        className="w-[250px] h-[250px] squared"
        src="/avatar.jpg"
        alt=""
      />
      <div>
        <h1 data-scroll data-scroll-speed="0.5" className="title text-[40px]">
          Quien soy?
        </h1>

        {/* Hide my age :v */}
        <p data-scroll className="text-lg text-gray-200" id="story">
          Mi nombre es Raúl de Diego Cancio. Soy un profesional del deporte y la actividad física, 
          viviendo en Galicia, España. 
        </p>

        <p data-scroll className="text-lg text-gray-200" id="story">
          Empecé a practicar deporte a partir de los 6 años. Desde entonces me saqué 
          el curso de entrenador de nivel 1 en Béisbol y he llagado a ser reconocido 
          como deportista de alto rendimiento al entrenar en un centro de 
          tecnificación deportiva.
        </p>  

        <p data-scroll className="text-lg text-gray-200" id="story">
          Actualmente estoy acabando la carrera en Ciencias de la Actividad Física 
          y Deporte ( CCAFYD ) y también estoy haciendo prácticas en un dentro de 
          entrenamiento personal dirigido a la salud, rendimiento y readaptación.
        </p>

        <p data-scroll className="text-lg text-gray-200" id="story">  
          A parte, me gusta {" "}
          <a
            className="underline underline-offset-2"
            href="https://linktr.ee/raulddc"
            target="_blank"
            rel="noopener noreferrer"
          >
            subir contenido fitness a las redes y todo lo relacionado con WEB3 y NFTs
          </a>
          
        </p>
      </div>
    </div>
    </>

  );
};

export default Who;
