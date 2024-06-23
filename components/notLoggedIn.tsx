import Nav from '@/components/navbar'

export default function notLoggedIn() {
    return (
    <div className=""> 
      <div className='flex flex-col items-center justify-center pt-24'> 
        <h1 className="text-3xl text-center font-bold tracking-tight text-gray-900 sm:text-4xl p-8">Vous devez être connecté pour accéder à cette page <br /> ou bien vous avez déjà acheté le premium !</h1>
        <div className='flex gap-x-4'>
            <a
                href="/login"
                className="rounded-md bg-fuchsia-700 mt-4 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
            Se connecter
            </a>
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