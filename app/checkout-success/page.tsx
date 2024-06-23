"use client"

import { useState, useEffect } from 'react'
//@ts-ignore
import Cookies from 'js-cookie'
import axios from 'axios'
import { useRouter } from 'next/navigation';

export default function CheckoutSuccess() {
    const router = useRouter();

    useEffect(() => {
        const handleCheckoutSuccess = async () => {
            const email = Cookies.get("email");
            const username = Cookies.get("username");

            Cookies.set('payment', 'true');

            const dataToSend = {
                email: email,
                username: username
            };

            try {
                const res = await axios.post("/api/checkout-success", dataToSend);
                router.push('/thanks')
            } catch (error) {
                console.error('Error:', error);
            }
        };

        handleCheckoutSuccess();
    }, []);

    return (
        <div className='min-h-screen bg-fuchsia-200'>
            <h1 className='text-fuchsia-200'>C'est une magnifique page !</h1>
        </div>
    )
}
