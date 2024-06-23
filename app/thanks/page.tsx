import Nav from '@/components/navbar'
import { Check } from 'lucide-react';

export default function Thanks() {
    return (
        <div className="min-h-screen bg-fuchsia-200">
            <Nav/>

            <div className='flex flex-col justify-center items-center mt-36'>
                <h1 className='text-4xl md:text-5xl text-center font-bold flex p-4'>Merci pour votre achat !</h1>
                <div className='flex'>
                    <a
                      href="/"
                      className="rounded-md bg-fuchsia-700 mt-4 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                      Page d&apos;accueil
                    </a>
                </div>
            </div>
        </div>
    )
}
