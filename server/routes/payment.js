import express from "express";
import stripe from "stripe";

// const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY, {
//   apiVersion: "2022-08-01",
// });

// const stripeInstance = stripe(process.env.STRIPE_SECRET_KEY);
// console.log(stripeInstance)

const paymentRouter = express.Router();

paymentRouter.get("/config", (req, res) => {
  res.send({
    publishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  });
});

paymentRouter.post("/create-payment-intent", async (req, res) => {
  const amountToPay = req;
  console.log(amountToPay);
  try {
    const paymentIntent = await stripe(
      process.env.STRIPE_SECRET_KEY
    ).paymentIntents.create({
      currency: "EUR",
      amount: req.body.total,
      automatic_payment_methods: { enabled: true },
    });

    // Send publishable key and PaymentIntent details to client
    res.send({
      clientSecret: paymentIntent.client_secret,
      req:req.body
    });
  } catch (e) {
    console.log(e);
    return res.status(400).send({
      error: {
        message: e.message,
      },
    });
  }
});

export default paymentRouter;
