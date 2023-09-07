// src/components/PaymentForm.js
import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

function PaymentForm() {
  const stripe = useStripe();
  const elements = useElements();
  const [paymentError, setPaymentError] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const cardElement = elements.getElement(CardElement);

    // Create a payment method using the card element
    const { paymentMethod, error } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      setPaymentError(error.message);
      return;
    }

    // Send the payment method to your server for payment processing
    const response = await fetch(
      "http://localhost:4000/payment/create-payment-intent",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ paymentMethodId: paymentMethod.id }),
      }
    );

    if (response.ok) {
      // Payment intent created successfully, handle client-side confirmation
      const { clientSecret } = await response.json();
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret
      );
      console.log(paymentIntent)

      if (error) {
        console.error(error);
        // Handle payment confirmation error
      } else {
        // Payment successful, show success message or navigate to a thank you page
        console.log(paymentIntent);
      }
    } else {
      console.error("Failed to create payment intent.");
    }
  };

  return (
    <div style={{background: "white", width:"100%", height:"100vh"}}>
      <form onSubmit={handleSubmit}>
        <CardElement />
        <button type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      {paymentError && <div>{paymentError}</div>}
    </div>
  );
}

export default PaymentForm;
