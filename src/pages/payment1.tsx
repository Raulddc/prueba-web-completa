import { useRouter } from 'next/router';
import { routes } from '../shared/router1';
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
const stripePromise = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`)

const PaymentPage1 = () => {
  const router = useRouter();
  const { pathname } = router;

  const route = routes.find(route => route.path === pathname);

  if (!route) {
    return <div>Not Found</div>;
  }

  return (
  <Elements stripe={stripePromise}>
  <route.component />
  </Elements>
  )
};

export default PaymentPage1;