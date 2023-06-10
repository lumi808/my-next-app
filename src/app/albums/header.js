'use client';
import { useRouter } from "next/navigation";


const Header = () =>
{    
    const router = useRouter();

    return(
        <header>
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 dark:bg-gray-800">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <a href="https://en.wikipedia.org/wiki/Kanye_West" className="flex items-center">
                        <img src="https://freepngimg.com/thumb/kanye_west/7-2-kanye-west-png.png" className="mr-3 h-6 sm:h-12" alt="Flowbite Logo"/>
                        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Kanye's Albums</span>
                    </a>
                    <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                <button 
                                    className="text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-200 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700" 
                                    aria-current="page"
                                    onClick = {()=>{router.push('/')}}>Home</button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default Header;