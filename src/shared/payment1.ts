
import { useRouter } from 'next/router';
const PaymentButton1 = () => {
    const router = useRouter();
  
    const handleClick = () => {
      router.push("/payment1");
    };
    return handleClick;
    }
    export { PaymentButton1 };

