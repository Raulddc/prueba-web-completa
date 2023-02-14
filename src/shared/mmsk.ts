import Web3 from "web3";
import axios from 'axios';



declare global {
    interface Window {
    ethereum: any;
    }
}

let web3: Web3;
if (typeof window !== "undefined" && window.ethereum) {
web3 = new Web3(window.ethereum);
} else {
// Asigna un valor por defecto a web3
web3 = new Web3("https://mainnet.infura.io/v3/ef427d1fb0744f8da9f5863201ef6a7c");
}


export async function requestTransaction(price2: number) {

    const networkId = await web3.eth.net.getId();

    if (!window.ethereum) {
        alert("Por favor instala MetaMask para continuar");
        return;
    }

    if (networkId === 1){
    try {
    // Request the user to connect their wallet
    await window.ethereum.send("eth_requestAccounts");
    // Get the user's wallet address
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0];
    const apiKey = "b0062d7a-b747-42c1-931e-1632081babfd";
    
    
    const options = {
        headers: {
          'Accept' : 'application/json',
          'X-CMC_PRO_API_KEY': apiKey,
          
        },
    };


    const response = await axios.get("https://mycorsproxrddc.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=ETH&convert=EUR", options);
    
    const data = response.data;

    let price: number | undefined;
    if (data.data && data.data.ETH && data.data.ETH.quote && data.data.ETH.quote.EUR) {
        const { data: { ETH: { quote: { EUR: { price: cryptoPrice } } } } } = data;
        price = cryptoPrice;
    } 
    else {
        // Maneja el error de alguna forma
        console.error("Error1a");
    }

    const amountInEuros = price2
    //const amountInEuros = 48;

    if (data.data && data.data.ETH && data.data.ETH.quote && data.data.ETH.quote.EUR) {
        const { data: { ETH: { quote: { EUR: { price } } } } } = data;
        //const price = data.ETH.quote.EUR.price;
        const amountInCrypto = amountInEuros / price;
        // Envía la transacción con la cantidad de criptomoneda calculada
        const result = await web3.eth.sendTransaction({
          from: account,
          to: "0xD02d819bf944919A9937B778fB2B1E2c57bcB406",
          value: web3.utils.toWei(amountInCrypto.toString(), "ether"),
        });
        console.log(result);
        alert("Transacción realizada correctamente. Envía el hash de la transacción en el formulario de abajo: " + result.transactionHash);
      } else {
        // Maneja el error de alguna forma
        console.error("Error2a");
      }
    
    } catch (error) {
    console.error(error);
    }
    }
    else if (networkId === 137) {
        // La red es la de Matic
        try {
            // Request the user to connect their wallet
            await window.ethereum.send("eth_requestAccounts");
            // Get the user's wallet address
            const accounts = await web3.eth.getAccounts();
            const account = accounts[0];
            const apiKey = "b0062d7a-b747-42c1-931e-1632081babfd";
            
            
            const options = {
                headers: {
                  'Accept' : 'application/json',
                  'X-CMC_PRO_API_KEY': apiKey,
                  
                },
            };
        
        
            const response = await axios.get("https://mycorsproxrddc.herokuapp.com/https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=MATIC&convert=EUR", options);
            
            const data = response.data;
        
            let price: number | undefined;
            if (data.data && data.data.MATIC && data.data.MATIC.quote && data.data.MATIC.quote.EUR) {
                const { data: { MATIC: { quote: { EUR: { price: cryptoPrice } } } } } = data;
                price = cryptoPrice;
            } 
            else {
                // Maneja el error de alguna forma
                console.error("Error1b");
            }
        
            const amountInEuros = price2
            //const amountInEuros = 48;
        
            if (data.data && data.data.MATIC && data.data.MATIC.quote && data.data.MATIC.quote.EUR) {
                const { data: { MATIC: { quote: { EUR: { price } } } } } = data;
                //const price = data.ETH.quote.EUR.price;
                const amountInCrypto = amountInEuros / price;
                // Envía la transacción con la cantidad de criptomoneda calculada
                const result = await web3.eth.sendTransaction({
                  from: account,
                  to: "0xD02d819bf944919A9937B778fB2B1E2c57bcB406",
                  value: web3.utils.toWei(amountInCrypto.toString(), "ether"),
                });
                console.log(result);
                alert("Transacción realizada correctamente. Envía el hash de la transacción en el formulario de abajo: " + result.transactionHash);
              } else {
                // Maneja el error de alguna forma
                console.error("Error2b");
              }
            
            } catch (error) {
            console.error(error);
            }
      } else {
        // La red es otra
        console.log("La transacción no se puede realizar en esta red");
        alert("La transacción no se puede realizar en esta red, cambia a Ethereum Mainet o Polygon");
      }
}
