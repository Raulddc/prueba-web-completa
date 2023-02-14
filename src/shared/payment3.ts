import { useRouter } from 'next/router';
const PaymentButton3 = () => {
    const router = useRouter();
  
    const handleClick = () => {
      router.push("/payment3");
    };
    return handleClick;
    }
    export { PaymentButton3 };

