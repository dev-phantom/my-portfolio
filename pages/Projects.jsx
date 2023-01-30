import Navbar from "../components/Navbar";
import { useRouter } from 'next/router'
import Image from 'next/image';
import { linkashare, ladygrace } from '../assets';
import Link from 'next/link'
import data from '../data/data.json';
import Socials from '../components/Socials';


const Projects = () => {
    let projectInfo = data.projects
    const router = useRouter()

    const handleGit = (e) => {
        e.preventDefault()
        router.push("https://github.com/dev-phantom")
    }
    return ( 
        <div className=" w-full pb-8 text-white ">
            <div>
                <Navbar />
            </div>
            <h1 className="font-semibold text-3xl md:text-4xl py-10 text-center">My-<span className="text-primary">Projects</span></h1>
            <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-5 gap-y-10 md:px-14">
            {projectInfo.map((items) => {
                return(
                        
                <div className="card px-5 mx-auto mt-10 " key={items.id}>
                    <div className="absolute right-[-20px] top-[-55px] lg:right-[-6rem]lg:top-12 bg-altBg w-[60%] md:w-[40%] p-2 rounded-lg">
                        <h2 className="text-sm text-orange capitalize">{items.first} <span className="text-primary font-bold text-center text-lg">.</span> {items.second} <span className="text-primary font-bold text-center text-lg">.</span> {items.third}</h2>
                        <h1 className="text-md capitalize leading-[25px] md:leading-[35px] py-1 md:py-3"><span className="text-primary">{items.name}</span> - {items.purpose}</h1>
                        <div className="flex justify-between px-1 pb-5">
                            <Link href={items.preview} target="_blank" className="flex">
                                <span className="pr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                
                            </Link>

                            <Link href={items.github} target="_blank" className="flex">
                                <span className="pr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" fill="currentColor" className="w-6 h-6"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
                                </span>
                                
                            </Link>
                            
                        </div>
                    </div>
                    <div>
                        <Image 
                            src={items.imgUrl}
                            alt={items.name}
                            className="rounded-lg"
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
                )})}
            </div>

            <div className="flex justify-center items-center pb-10 pt-20">
                <button className="bg-primary px-20 py-4 text-[#000000] font-semibold rounded-xl" onClick={handleGit}>More Projects</button>
            </div>
            <div className='py-3 pr-20 absolute right-4'>
                <Socials/>
            </div>
        </div>
     );
}
 
export default Projects;