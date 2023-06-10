'use client';
import React from 'react';
import Header from './header';
import Footer from './footer';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Page = () => 
{
    const CLIENT_ID = "48a69b8735ed43d2a520fc24b32a0675";
    const REDIRECT_URI = "http://localhost:3000/albums";
    const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"; 
    const RESPONSE_TYPE = "token";

    const [token, setToken] = useState("");
    useEffect(()=>{
        const hash = window.location.hash;
        let token = window.localStorage.getItem("token");

        if(!token && hash){
            token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1];

            window.location.hash = "";
            window.localStorage.setItem("token", token);
        }

        setToken(token);

    },[]);

    const logout = () => {
        setToken("");
        window.localStorage.removeItem("token");
    };

    const fetchData = async () => {
        try{
            const response = await axios.get("https://api.spotify.com/v1/artists/5K4W6rqBFWDnAN6FQUkS6x/albums", {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log(response);

        } catch(error){
            console.log(error.data.items);
        }
    }


    return (
        <div>
            <Header />
            <main className="flex min-h-screen flex-col items-center justify-between p-24">
                <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
                    <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Log in</span> to Spotify.</h1>
                    {!token ?
                    <a 
                    href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}
                    className='text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800'>
                    Log In </a>
                    :  <button onClick={logout}>Log Out</button>}

                    <button onClick={fetchData}>Show Albums</button>
                </div>
            </main>
            <Footer />
        </div>
    );
}

export default Page;