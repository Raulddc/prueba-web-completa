import { useState } from 'react';


const ProductSelection = () => {
  // Inicializamos el estado para el número de productos seleccionados y el precio
  const [numSelected, setNumSelected] = useState(1);
  const [price1, setPrice1] = useState(60);
  const [price2, setPrice2] = useState(48);
  const [discountApplied, setDiscountApplied] = useState(false);

    // Función para aumentar el número de productos seleccionados y el precio
    const handleAddClick = () => {
    setNumSelected(numSelected + 1);
    setPrice1(price1 + 60);
    setPrice2(price2 + 48*0.88889);
    
    }
    
    // Función para disminuir el número de productos seleccionados y el precio
    const handleRemoveClick = () => {
    if (numSelected > 1) {
    setNumSelected(numSelected - 1);
    setPrice1(price1 - 60);
    setPrice2(price2 - 48*0.88889);
    }
    }
    

 
  const handleDiscountCodeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const input = form.elements.namedItem('discountCode') as HTMLInputElement;
    const code = input.value;
    handleDiscountCode(code);
  }
   // Función para aplicar el descuento
   const handleDiscountCode = (code: string) => {
    if (discountApplied) {
        alert("El código ya está aplicado");
    }
    else if (code === "START") {
      setPrice2(price2 * 0.9);
      setDiscountApplied(true);
    } 
    else {
        alert("Código de descuento no válido, prueba a escribirlo en mayusculas");
    }
  }
  const price2Number = () =>{
  Number(price2);
  }

  return {
    numSelected,
    price1,
    price2,
    price2Number,
    handleAddClick,
    handleRemoveClick,
    handleDiscountCode,
    handleDiscountCodeSubmit,
  };
};

export { ProductSelection };