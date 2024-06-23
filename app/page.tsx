"use client"

import { useState, useEffect, useRef } from 'react';
//@ts-ignore
import AOS from 'aos';
//@ts-ignore
import Cookies from 'js-cookie'
import 'aos/dist/aos.css';

import Nav from '@/components/navbar'
import Globe from '@/components/globe'
import PremiumSection from '@/components/premiumSection'
import Footer from '@/components/footer'
import { CardStackDemo } from '@/components/card-stack'
import Flip from '@/components/ui/flip'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { SquareArrowOutUpRight, MoveRight } from 'lucide-react';

export default function Home() {
  const videoSectionRef = useRef(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [isPaid, setIsPaid] = useState<boolean>(false);
  const [username, setUsername] = useState()

  useEffect(() => {
    AOS.init({
      duration: 1000,
    });

    const usernameCookie = Cookies.get('username');
    if (usernameCookie) {
      setIsLoggedIn(true);
      setUsername(usernameCookie)
    } else {
      setIsLoggedIn(false);
    }

    const paymentCookie = Cookies.get('payment');
    if (paymentCookie === 'true') {
      setIsPaid(true);
    } else {
      setIsPaid(false);
    }
  }, []);

  const handleScrollToVideo = () => {
    if (videoSectionRef.current) {
      //@ts-ignore
      videoSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const WordsArray = [
    'Bali',
    'Tokyo',
    'New-York',
    'Rio',
  ];

  return (
    <div className='min-h-screen bg-fuchsia-200 tracking-tight'>
      <Nav/>

      <div className="flex flex-col items-center mt-36">
        <div className='flex flex-col items-center justify-center gap-y-8'>
          {isLoggedIn ? (
            <h1 className="text-center text-black text-4xl lg:text-6xl font-bold tracking-tight max-w-[888px]">Bonjour <span className='text-fuchsia-700'>{username}</span> ! Prêt pour votre prochain voyage ?</h1>
          ) : (
            <h1 className="text-center text-black text-4xl lg:text-6xl font-bold tracking-tight max-w-[888px]">Le moyen <span className="text-fuchsia-700">innovant</span> pour trouver votre future destination</h1>
          )}
          <div className='flex gap-x-4'>
            <a className='flex items-center justify-center gap-x-2 p-2 bg-fuchsia-700 hover:bg-fuchsia-600 rounded-full w-36 h-10 text-white' href="https://apps.apple.com/fr/app/apple-store/id375380948">Télécharger  <SquareArrowOutUpRight className='w-4 h-4'/></a>
            <button onClick={handleScrollToVideo} className='flex items-center justify-center gap-x-1 text-black'>Découvrir <MoveRight className='w-4' /></button>
          </div>
        </div>
        <img className="" src="mockup.png" alt="" />
      </div>

      <div ref={videoSectionRef} className='flex flex-col md:flex-row gap-y-12 mt-48 md:mt-64 lg:mt-36 justify-center gap-x-48'>
        <div className='max-w-2xl p-4'>
          <h1 className='text-4xl lg:text-5xl font-bold text-center'>Scrollez pour trouver <br /> vos futures vacances</h1>
          <p className='text-lg text-center max-w-xl mt-6'>Vous ne savez pas où partir au cours de vos prochaines vacances ? <br /> Avec <span className='text-fuchsia-700'>SwipTrim</span> vous n&apos;aurez qu&apos;à nous indiquer des destination que vous appréciez et l&apos;algorithme vous recommendera des destinations qui vous conviendront à coup sur</p>
        </div>

        <div data-aos='fade-left' className='flex justify-center md:justify-start'>
          <video
            src="/scrolling.mov"
            autoPlay
            loop
            muted
            playsInline
            className='w-[300px] h-[650px]'
          />
        </div>
      </div>

      <div className='mt-72'>
        <div className='flex flex-col md:flex-row justify-center gap-x-48 gap-y-16'>
          <div className='lg:w-[700px] h-16 p-2 md:p-0'>
            <h1 className='text-4xl lg:text-5xl font-bold text-center'>Venez découvrir<Flip words={WordsArray} className='tracking-tight text-fuchsia-700' /> </h1>
          </div>
          <div data-aos='fade-left' className='pt-8 md:pt-0 flex justify-center md:justify-start'>
            <CardStackDemo />
          </div>
        </div>
      </div>

      <div className='mt-64'>
        <h1 className='text-black text-center text-4xl lg:text-5xl font-bold'>Mais également des <span className='text-fuchsia-700'>centaines</span> d&apos;autres <br /> destinations à travers le monde</h1>
        <div data-aos="fade-right" className='cursor-pointer'>
          <Globe />
        </div>
      </div>

      <div className='-mt-80 md:mt-72'>
        <h1 className='text-black text-center text-4xl lg:text-5xl font-bold'>Vous avez des questions ?</h1>
        <div className='flex justify-center mt-12 md:mt-36 p-8 md:p-0'>
          <Accordion type="single" collapsible className='w-[500px]'>
            <AccordionItem value="item-1">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger>Is it accessible?</AccordionTrigger>
              <AccordionContent>
                Yes. It adheres to the WAI-ARIA design pattern.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>

      <div className='mt-36 pb-72'>
        {isPaid ? (
          null
        ) : (
          <PremiumSection/>
        )}
      </div>

      <Footer />
    </div>
  );
}
