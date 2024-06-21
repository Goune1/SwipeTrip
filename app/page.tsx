import Nav from '@/components/navbar'

export default function Home() {
  return (
    <div className='min-h-screen bg-fuchsia-200 tracking-tight'>
      <Nav/>

      <div className="flex flex-col items-center mt-24">
        <div className='flex flex-col items-center justify-center gap-y-8'>
          <h1 className="text-center text-black text-6xl font-semibold tracking-tight">Le moyen <span className="text-fuchsia-700">innovant</span> pour trouver <br /> votre future destination</h1>
          <div className='flex gap-x-4'>
            <a className='p-2 bg-fuchsia-700 hover:bg-fuchsia-600 rounded-full w-36 h-10 text-center text-white' href="download">Télécharger</a>
            <a href="/discover" className='text-black mt-2'>Découvrir</a>
          </div>
        </div>
        <img className="" src="mockup.png" alt="" />
        
      </div>
    </div>
  )
}