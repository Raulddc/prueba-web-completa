import { useRouter } from 'next/router';
const AfiliadosButton = () => {
    const router = useRouter();
  
    const handleClick = () => {
      router.push("/afiliados");
    };
    return handleClick;
    }
    export { AfiliadosButton };

