import Link from 'next/link';
import data from '../data/data.json';
const Socials = () => {
    let socials = data.Socials
    return ( 
        <div className="flex w-full">
            {socials.map((social) => {
                return(
                    <div key={social.id} className="flex gap-4 pr-2 ">
                        <Link href={social.link} target="_blank">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="w-8 h-8" viewBox={social.viewbox}>
                                <path d={social.pathd}/>
                            </svg>
                        </Link>
                    </div>
                    )
                }
            )}
        </div>
     );
}
 
export default Socials;
