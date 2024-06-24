"use client"

import { useState, useEffect } from 'react'
//@ts-ignore
import Cookies from 'js-cookie'
import { MoveRight, LogOut, ChevronDown, Crown, Settings } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function Nav() {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    const [username, setUsername] = useState()

    const handleLogout = () => {
        // Supprimer le cookie de l'utilisateur
        Cookies.remove('username');
        Cookies.remove('email')
        Cookies.remove('payment')
    };
    

    useEffect(() => {
        const usernameCookie = Cookies.get('username');
        if (usernameCookie) {
          setIsLoggedIn(true);
          setUsername(usernameCookie)
        } else {
          setIsLoggedIn(false);
        }
    }, []);

    return (
        <div>
        {isLoggedIn ? (
            <div className="flex justify-between pt-4">
                <a href="/" className="ml-12 text-2xl text-black hover:text-fuchsia-700 font-semibold">SwipeTrip</a>
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <h1 className='flex text-black text-lg mr-8 font-medium cursor-pointer'>{username} <ChevronDown className='mt-1'/></h1>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="dark w-56 mr-4">
                        <div className='flex cursor-pointer hover:text-fuchsia-400'>
                            <Crown/>
                            <a className='ml-1' href='/premium'>Devenir Premium</a>
                        </div>
                        <div className='flex cursor-pointer mt-2 hover:text-fuchsia-400'>
                            <Settings/>
                            <a className='ml-1' href='/'>Paramètres</a>
                        </div>
                        <div className='flex cursor-pointer mt-2 hover:text-fuchsia-400'>
                            <LogOut/>
                            <a className='ml-1' href='/' onClick={handleLogout}>Se déconnecter</a>
                        </div>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        ) : (
            <div className="flex justify-between pt-4">
                <a href="/" className="ml-12 text-2xl text-black hover:text-fuchsia-700 font-semibold">SwipeTrip</a>
                <a href="/login" className="mr-12 text-black flex gap-x-1 font-medium mt-1">Se connecter  <MoveRight className='w-4' /></a>
            </div>
        )}
        </div>
        
    )
}
