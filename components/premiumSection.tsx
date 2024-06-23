"use client"

import { useState, useEffect } from 'react'
//@ts-ignore
import Cookies from 'js-cookie'
import Nav from '@/components/navbar'
import { CheckIcon } from '@heroicons/react/20/solid'

const includedFeatures = [
  'Application sans publicité',
  'Plus de Swipe chaque jour',
  'Réduction régulière',
  'Nouvelles destinations exclusives',
]


export default function Premium() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    useEffect(() => {
        const usernameCookie = Cookies.get('username');
        if (usernameCookie) {
          setIsLoggedIn(true);
        } else {
          setIsLoggedIn(false);
        }
    }, []);

    const handleBuy = () => {
        fetch('/api/create-checkout-session', {
          method: 'POST'
        }).then(res => {
            if(res.ok) return res.json()
            return res.json().then(json => Promise.reject(json))
        }).then(({ url }) => {
            window.location = url
        }).catch(e => {
            console.log(e.error)
        })
    }

    return (
        <div className='bg-fuchsia-200'>
            <div className="py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl sm:text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Devenez un membre <span className='text-fuchsia-700'>Premium</span></h2>
                </div>
                <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-fuchsia-300 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
                    <div className="p-8 sm:p-10 lg:flex-auto">
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Adhésion à vie</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Découvrez l&apos;ultime expérience de voyage avec notre adhésion à vie. Profitez de tous les avantages exclusifs conçus pour rendre chaque voyage inoubliable et sans tracas.
                        </p>
                        <div className="mt-10 flex items-center gap-x-4">
                            <h4 className="flex-none text-sm font-semibold leading-6 text-fuchsia-700">Qu&apos;est-ce qui est inclus ?</h4>
                            <div className="h-px flex-auto bg-fuchsia-200" />
                        </div>
                        <ul
                            role="list"
                            className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
                        >
                            {includedFeatures.map((feature) => (
                            <li key={feature} className="flex gap-x-3">
                                <CheckIcon className="h-6 w-5 flex-none text-fuchsia-700" aria-hidden="true" />
                                {feature}
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                        <div className="rounded-2xl bg-fuchsia-200 py-10 text-center ring-1 ring-inset ring-fuchsia-300 lg:flex lg:flex-col lg:justify-center lg:py-16">
                            <div className="mx-auto max-w-xs px-8">
                                <p className="text-base font-semibold text-gray-600">Payez une fois, obtenez le pour toujours</p>
                                <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                    <span className="text-5xl font-bold tracking-tight text-gray-900">50€</span>
                                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">EUR</span>
                                </p>
                                {isLoggedIn ? (
                                    <a
                                    onClick={handleBuy}
                                    className="mt-10 block w-full rounded-md bg-fuchsia-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                                    >
                                        Obtenir le Premium
                                    </a>
                                ) : (
                                    <a
                                    href='login'
                                    className="mt-10 block w-full rounded-md bg-fuchsia-700 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-fuchsia-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
                                    >
                                        Obtenir le Premium
                                    </a>
                                )}
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </div>
    )
}