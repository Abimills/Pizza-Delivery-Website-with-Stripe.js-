import { useContext, useEffect, useState } from "react";
import "./payment.css";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";
import { AppContext } from "../Context/Context";

function Payment() {
  const [stripePromise, setStripePromise] = useState(null);
  const [clientSecret, setClientSecret] = useState("");
  const { totalAmount } = useContext(AppContext);

  useEffect(() => {
    fetch("http://localhost:4000/payment/config").then(async (res) => {
      const { publishableKey } = await res.json();
      setStripePromise(loadStripe(publishableKey));
    });
  }, []);
  const fetchIntent = async () => {
    const response = await fetch(
      "http://localhost:4000/payment/create-payment-intent",
      { method: "POST", body: JSON.stringify({ total: 100 }) }
    );
    const data = await response.json();
    setClientSecret(data?.clientSecret);
  };

  useEffect(() => {
    fetch("http://localhost:4000/payment/create-payment-intent", {
      method: "POST",
      body: JSON.stringify({ total: 300 }),
    }).then(async (result) => {
      var { clientSecret } = await result.json();
      setClientSecret(clientSecret);
    });
// fetchIntent();
  }, []);

  return (
    <>
      <h1 className="payment-header">Total : {totalAmount}</h1>
      {clientSecret && stripePromise && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <CheckoutForm />
        </Elements>
      )}
    </>
  );
}

export default Payment;
