import React, { useState } from "react";

 const ProductSlider = () => {
    interface Image {
        id: number;
        src: string;
        alt: string;
        text: string;
        titulo: string;

    }
    const images: Image[] = [  
        {    id: 1,    src: 'HI.jpg',    alt: 'Product 1', titulo:'HIPERTROFIA:',   text: 'Programa de ganancia de masa muscular. Implementación de sistemas de entrenamiento que favorecen la hipertrofia con ejercicios analíticos focalizados en musculatura concreta, tanto para población general que busque mantener la masa muscular, como para atletas que quieran llevar su cuerpo al siguiente nivel.'  },  
        {    id: 2,    src: 'FUERZA.jpg',    alt: 'Product 2',  titulo:'FUERZA:',  text: 'Programación enfocada a la mejora de la fuerza mediante hipertrofia sarcomérica y cordinación intramuscular, tanto de forma funcional como específica para deportes como powerlifting.'  },  
        {    id: 3,    src: 'ADELGAZAR.jpg',    alt: 'Product 3',  titulo:'ADELGAZAR:',  text: 'Programa de entrenamiento focalizado en la utilización de las vías energéticas de las grasas y en el ejercicio de alta intensidad (HIT), no solo mediante el trabajo funcional en circuitos metabólicos si no, también, mediante trabajo cardiovascular contínuo y variable.'  }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const handleLeftArrowClick = () => {
        if (currentIndex === 0) {
          setCurrentIndex(images.length - 1);
        } else {
          setCurrentIndex(currentIndex - 1);
        }
    }
      
    const handleRightArrowClick = () => {
        if (currentIndex === images.length - 1) {
          setCurrentIndex(0);
        } else {
          setCurrentIndex(currentIndex + 1);
        }
    }
    return{
        images,
        currentIndex,
        handleLeftArrowClick,
        handleRightArrowClick,
    }
      

  };
  export { ProductSlider };