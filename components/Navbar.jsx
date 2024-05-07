import { Inter } from "next/font/google"
import { useRouter } from 'next/router'
import { useState } from "react";
import Link from 'next/link';
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})


const Navbar = () => {   
    const router = useRouter()
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = () => setIsOpen(!isOpen);

    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return ( 
        <div className=''>
            <nav className={`${inter.variable} hidden font-sans md:flex md:flex-wrap justify-between items-center px-20 py-5`}>
                <div>
                    <h1  className={`${inter.variable} font-sans text-lg font-bold text-secondary pr-4 flex flex-reverse`}>dev.phantom</h1>
                </div>
                <div>
                    {[
                        ['Home', '/', 1],
                        ['About-me', '/About', 2],
                        ['Projects', '/Projects', 3],
                        ['Contact', '/Contact', 4],
                    ].map(([title, url, id]) => { 
                    const isActive = router.asPath === url;      
                    return (
                        <Link href={url} key={id}
                        className={classNames(
                            isActive
                            ? "text-primary"
                            : "text-textColor",
                            "px-3 py-2 text-lg font-medium "
                        )}
                        >{title}</Link>
                    
                    )})}
                </div>
            </nav>

            <nav className={`${inter.variable} z-[999] w-full md:hidden font-sans flex flex-wrap justify-between items-center px-10 py-5`}>
                <div>
                    <h1  className={`${inter.variable} font-sans text-lg font-bold text-secondary`}>dev.phantom</h1>
                </div>
                {isOpen && <div className="z-[999] w-1/2 h-screen bg-altBg fixed top-0 right-0 flex justify-center items-center flex-col ">
                <button onClick={handleClick} className='text-white fixed top-3 right-5'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button> 
                    {[
                        ['Home', '/', 1],
                        ['About-me', '/About', 2],
                        ['Projects', '/Projects', 3],
                        ['Contact', '/Contact', 4],
                    ].map(([title, url, id]) => { 
                    const isActive = router.asPath === url;      
                    return (
                        <Link href={url} key={id}
                        className={classNames(
                            isActive
                            ? "text-primary"
                            : "text-textColor",
                            "px-3 py-2 text-lg font-medium "
                        )}
                        >{title}</Link>
                    
                    )})}
                </div>
                }
                <button onClick={handleClick} className='text-white flex md:hidden fixed top-3 right-5'>
                    {!isOpen ? 
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25" />
                    </svg>
                    :
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    }
                </button> 
            </nav>
            
        </div>

     );
}
 
export default Navbar;