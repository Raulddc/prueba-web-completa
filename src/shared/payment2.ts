import { useRouter } from 'next/router';
const PaymentButton2 = () => {
    const router = useRouter();
  
    const handleClick = () => {
      router.push("/payment2");
    };
    return handleClick;
    }
    export { PaymentButton2 };

