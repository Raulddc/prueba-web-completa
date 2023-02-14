import { useRouter } from 'next/router';
const ServiciosButton = () => {
    const router = useRouter();
  
    const handleClick = () => {
      router.push("/servicios");
    };
    return handleClick;
    }
    export { ServiciosButton };

