'use client'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import axios from 'axios'
import { useRouter } from 'next/navigation';


const Page = () => {

    const [quote, setQuote] = useState('');

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        try{
            const response = await axios.get('https://api.kanye.rest');
            setQuote(response.data.quote);

        }catch(error){
            console.log('Error fetching quote: ', error);
        }
    }

    const router = useRouter();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-36">
            <h1 className="text-5xl font-extrabold dark:text-white">Kanye West's <small className="ml-2 font-semibold text-gray-500 dark:text-gray-400">Quotes</small></h1>
                <Image
                    src="/images/kanye.jpg"
                    height={300} 
                    width={600} 
                    alt="Your Name"
                    className="h-auto max-w-xl rounded-lg shadow-xl dark:shadow-gray-900" 
                />
            <p className='text-lg text-center font-medium text-gray-900 dark:text-whit'>'{quote}'</p>
        <button className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 " onClick={fetchQuote}>Generate Quote</button>
        <h1 className="title">
            <button className='text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700' onClick={() => router.push('/')}>Back</button>
        </h1>
  </main>
  )
}

export default Page

//