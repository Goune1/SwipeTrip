import { SquareArrowOutUpRight, MoveRight } from 'lucide-react';

export default function Nav() {
    return (
        <div className="flex justify-between pt-4">
            <a href="/" className="ml-12 text-2xl text-black font-semibold">SwipTrip</a>
            <a href="https://apps.apple.com/fr/app/apple-store/id375380948" className="mr-12 text-black flex gap-x-1 font-medium mt-1">Télécharger  <SquareArrowOutUpRight className='w-4 h-4 mt-1'/></a>
        </div>
    )
}