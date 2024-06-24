import { NextResponse } from 'next/server';
//@ts-ignore
import bcrypt from 'bcryptjs';
import mongoose from 'mongoose';

import Stripe from 'stripe';

const stripe = new Stripe(process.env.STRIPE_KEY)

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
        success_url: `https://swip-trip.vercel.app/checkout-success`,
        cancel_url: `https://swip-trip.vercel.app/premium`
    })

    return NextResponse.json({url: session.url});
}
