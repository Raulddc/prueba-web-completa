import React, { FC, useState } from "react";

import { FaCcVisa } from "react-icons/fa";
import { FaCcMastercard } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { requestTransaction } from "../shared/mmsk";
import { ProductSelection } from "../shared/ProductSelection";



const PaymentPage2: FC = () => {
const { numSelected, price1, price2, handleAddClick, handleRemoveClick, handleDiscountCode, handleDiscountCodeSubmit } = ProductSelection();
const [selectedContent, setSelectedContent] = useState("");
  return (
    <>
      
  
      <div className="pb-20">
          <h1 className="text-center text-4xl mt-14 md:mt-28 mb-10">
          PROGRAMACIÓN FUERZA
          </h1>
          <div
            data-scroll
            data-scroll-speed="1"
            className="flex justify-center mx-[5vw] mt-8"
        >
        <div className=" w-full flex gap-10 flex-col md:flex-row">

        <div className="flex-1 justify-center" >
          
  
          <img
            style={{ 
              position: 'sticky', 
              top: 30,  
              width: '80%',
              objectFit: 'contain',
              borderRadius: "20px",
            }}
            data-scroll
            data-scroll-speed="2"
            className="rounded-12px"
            src="FUERZA.jpg"
            alt=""
          />
          

        </div>

        
        <div className="flex-1 ">
            <div className="flex justify-center mt-[25px] gap-[20px]">
            <p data-scroll className="text-lg text-gray-200" id="story">
            Selecciona el método de pago
            </p>
            </div>
            <div className=" flex justify-center mt-[25px] gap-[20px]">
            Fiat: 60€
            
            Crypto: 48€

            / MES
            </div>

            <div className="flex justify-center mt-[25px] gap-[20px]">
              <a
                href="https://buy.stripe.com/test_28o5mi8Hjep1fMQeUW"
                target="_blank"
                rel="noopener noreferrer"
                className="h-[45px] px-[15px] text-white transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#191e25]"
              >
          
                <FaCcVisa size={25} />
                <FaCcMastercard size={25} />
                
              </a>
              <a
                onClick={() => {setSelectedContent("content1") }}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[45px] px-[15px] text-white transition duration-300 flex items-center gap-[10px] bg-[#ff8000] hover:bg-[#2884e0]" 
              >
                Metamask
                <FaEthereum size={25} />
                
              </a>
            </div>

            {selectedContent === "content1" ? (
              <>
              <div className="flex justify-center mt-[25px] gap-[20px]">
              <button
                className="h-[45px] px-[15px] text-white transition duration-300 flex items-center gap-[10px]"
                style={{
                  border: '1px solid #ccc',
                  backgroundColor: 'transparent',
                }}
              >
                Meses: {numSelected}
              </button>
              <button
                className="h-[45px] px-[15px] text-white transition duration-300 flex items-center gap-[10px]"
                style={{
                  border: '1px solid #ccc',
                  backgroundColor: 'transparent',
                }}
              >
                {price2.toFixed(2)}€
              </button>
              </div>
              <div className="flex justify-center mt-[25px] gap-[20px]">
              
              <button onClick={handleRemoveClick} className="h-[45px] px-[15px] text-white transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#191e25]">
                - 1 mes
              </button>
              <button onClick={handleAddClick} className="h-[45px] px-[15px] text-white transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#191e25]">
                + 1 mes
              </button>
              </div>
              <form className="flex justify-center mt-[25px] gap-[20px]" onSubmit={handleDiscountCodeSubmit}>
                <input type="text" name="discountCode" placeholder="Código Descuento" />
                <button className="h-[45px] px-[15px] text-white transition duration-300 flex items-center gap-[10px] bg-[#1876d2] hover:bg-[#191e25]" type="submit">Aplicar</button>
              </form>
              <div className="flex justify-center mt-[25px] gap-[20px]">
              <a
                onClick={() => {requestTransaction(price2)}}
                target="_blank"
                rel="noopener noreferrer"
                className="h-[45px] px-[15px] text-white transition duration-300 flex items-center gap-[10px] bg-[#ff8000] hover:bg-[#2884e0]" 
              >
                Pay
                <FaEthereum size={25} />
                
              </a>
              </div>
              <div className="flex justify-center mt-[25px] gap-[20px]">
              <iframe width="600" height="1015" src="https://ebc0809d.sibforms.com/serve/MUIEAGFjDsyJdMhaFXCMP-ug3YjnN7WxXTR1WulCK0kWftAmcPTi1QMKznmu1NqijWniPf4Z8KuBR9zFNLZexsD8ggIJg38o6Ang4M9ptqA97FwZc8eRLyDjFdmDUhVMYUNCJdc-oOqYZctCOdMBjilOAkh2nuh5CGr27QATYhmf2ykfnrRZDpjBWiQnJYymbEFircmM4CY6eENw"></iframe>
              </div>
              </>
            ) : null}

        </div>


        

</div>
</div>
  </div>

  
  
  </>
  );
  };

export default PaymentPage2;

