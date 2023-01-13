import { Inter } from '@next/font/google'
import { useRouter } from 'next/router'
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
                    ['About-me', '/about', 2],
                    ['Projects', '/projects', 3],
                    ['Contact', '/contact', 4],
                ].map(([title, url, id]) => { 
                const isActive = router.asPath === url;      
                return (
                    <a href={url} key={id}
                    className={classNames(
                        isActive
                        ? "text-primary"
                        : "text-textColor",
                        "px-3 py-2 text-lg font-medium "
                    )}
                    >{title}</a>
                
                )})}
            </div>
        </nav>

     );
}
 
export default Navbar;