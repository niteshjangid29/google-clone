import Head from 'next/head'
import Header from '../components/Header'
import Image from 'next/image';
import { SearchIcon, MicrophoneIcon} from '@heroicons/react/solid';
import Footer from '../components/Footer';
import { useRouter } from 'next/router';
import { useRef } from 'react';

export default function Home() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (event) => {
    event.preventDefault();   // prevent page refreshing
    const term = searchInputRef.current.value;
    if(!term.trim()) return;
//trim removes the white-space
    router.push(`/search?term=${term.trim()}`);
  }

  return (
    <div>
      <Head>
        <title>Google Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header/>

      {/* Body */}
      <form className='flex flex-col items-center mt-40' action="">
        <Image width={300} objectFit="cover" height={100} src='https://purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png' />
        <div className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 hover:shadow-lg focus-within:shadow-lg px-5 py-3 rounded-full items-center sm:max-w-xl lg:max-w-2xl">
          <SearchIcon className='h-5 text-gray-500 mr-3' />
          <input ref={searchInputRef} type="text" className='flex-grow focus:outline-none' />
          <MicrophoneIcon className='h-5'/>
        </div>
        <div className="flex flex-col sm:flex-row w-[50%] space-y-2 mt-8 sm:space-y-0 sm:space-x-4 justify-center">
          <button onClick={search} className='btn'>Google Search</button>
          <button className='btn'>I'm Feeling Lucky</button>
        </div>
      </form>

      {/* Footer */}
      <Footer />
    </div>
  )
}
