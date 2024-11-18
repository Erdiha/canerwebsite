'use client';

import React from 'react';
import CheckoutPage from '@/components/CheckoutPage';
import convertToSubcurrency from '@/utils/convertToSubcurrency';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

if (process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY === undefined) {
  throw new Error('Stripe publishable key is not defined');
}

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function Page() {
  return (
    <Elements
      stripe={stripePromise}
      options={{
        mode: 'payment',
        amount: convertToSubcurrency(amount),
        currency: 'usd',
      }}
    >
      <CheckoutPage />
    </Elements>
  );
}
