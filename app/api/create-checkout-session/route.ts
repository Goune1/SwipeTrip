import { NextResponse } from 'next/server';
//@ts-ignore
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

import Stripe from 'stripe';

const stripe = new Stripe('sk_test_51P1WhQLezuV5pxcSzz9bdP1knlpCoSqoBOfYQOmz9VijOSc0K5TQT6GoWpYebRnv7BMIAFn8zKWSuCzyObDIuajz00HFULQV0I')

export async function POST(request: Request): Promise<NextResponse> {
    const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        mode: 'payment',
        line_items: [{ 
            price_data: {
                currency: 'eur',
                product_data: {
                    name: 'SwipTrip Premium'
                },
                unit_amount: 5000
            },
            quantity: 1 
        }],
        success_url: `https://trip.goune.dev/checkout-success`,
        cancel_url: `https://trip.goune.dev/premium`
    })

    return NextResponse.json({url: session.url});
}
