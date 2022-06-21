import Image from "next/image"
import { useRouter } from "next/router"
import { useRef } from 'react';
import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import User from "./User";
import search from './../pages/search';

const SearchHeader = () => {
    const router = useRouter();
    const searchInputRef = useRef(null);

    const search = (event) => {
        event.preventDefault();
        const term = searchInputRef.current.value;
        if(!term.trim()) return;

        router.push(`/search?term=${term.trim()}`);
    }

  return (
    <header className="sticky top-0 bg-white">
        <div className="flex w-full p-6 items-center">
            <Image onClick={() => router.push("/")} className="cursor-pointer" width="120" objectFit="contain" height="40" src='https://purepng.com/public/uploads/large/purepng.com-google-logo-2015brandlogobrand-logoiconssymbolslogosgoogle-6815229372333mqrr.png' />
            <form className="flex border border-gray-200 rounded-full shadow-lg px-6 py-3 ml-10 mr-5 flex-grow max-w-3xl items-center">
                <input className="w-full focus:outline-none" type="text" defaultValue={router.query.term} ref={searchInputRef} />
                <XIcon onClick={() => (searchInputRef.current.value = "")} className="h-7 text-gray-500 cursor-pointer sm:mr-3" />
                <MicrophoneIcon className="h-6 hidden sm:inline-flex text-blue-500 pl-4 border-l-2 border-gray-300 mr-3" />
                <SearchIcon className="h-6 hidden sm:inline-flex text-blue-500" />
                <button onClick={search} type="submit" hidden></button>
            </form>
            <User className="ml-auto" />
        </div>
    </header>
  )
}

export default SearchHeader