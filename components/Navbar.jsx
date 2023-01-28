import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
import Link from 'next/link';
const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})


const Navbar = () => {   
    const router = useRouter()
    function classNames(...classes) {
        return classes.filter(Boolean).join(' ')
    }

    return ( 
        <nav className={`${inter.variable} font-sans flex justify-between items-center px-20 py-5`}>
            <div>
                <h1  className={`${inter.variable} font-sans text-lg font-bold text-secondary`}>dev.phantom</h1>
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

     );
}
 
export default Navbar;