import { NextResponse } from 'next/server';
import mongoose from 'mongoose';

export async function POST(request: Request): Promise<NextResponse> {
    try {
        const result = await request.json();

        const loginCollection = require("@/schemas/login");

        const DB_URL = process.env.DB_URL;
        
        await mongoose.connect(DB_URL);
        console.log("Connecté à la base de données MongoDB");

        const email = result.email;
        const user = await loginCollection.findOne({ email: email });

        if (user) {
            const updatedUser = await loginCollection.findOneAndUpdate(
                { email: email }, // trouver le doc à mettre à jour
                { $set: { payment: true } }, // mise à jour de payment dans la db Mongo
                { returnDocument: 'after' } // Option pour renvoyer le document mis à jour
            );

            return NextResponse.json({ message: 'Correctly saved', user: updatedUser });
        } else {
            return NextResponse.json({ error: 'user not found', status: '400' });
        }
    } catch (error) {
        console.error(`Error in POST /api/checkout-success: ${error}`);
        return NextResponse.json({ error: 'An error occurred', status: '500' });
    }
}
