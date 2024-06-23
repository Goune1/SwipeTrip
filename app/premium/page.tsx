"use client"

import { useState, useEffect } from 'react'
//@ts-ignore
import Cookies from 'js-cookie'
import Nav from '@/components/navbar'
import PremiumSection from '@/components/premiumSection'
import NotLoggedIn from '@/components/notLoggedIn'


export default function Premium() {
    const [isPaid, setIsPaid] = useState<boolean>(false);

    useEffect(() => {
        const paymentCookie = Cookies.get('payment');
        if (paymentCookie === 'true') {
          setIsPaid(true);
        } else {
          setIsPaid(false);
        }
    }, []);

    return (
        <div className='min-h-screen bg-fuchsia-200'>
            <Nav/>

            {isPaid ? (
                <NotLoggedIn/>
            ) : (
                <PremiumSection/>
            )}
        </div>
    )
}