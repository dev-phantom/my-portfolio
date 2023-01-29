import Navbar from "../components/Navbar";
import Image from 'next/image';
import { linkashare, ladygrace } from '../assets';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFaceRelieved } from '@fortawesome/pro-solid-svg-icons'

const Projects = () => {
    return ( 
        <div className=" w-full pb-8 text-white">
            <div>
                <Navbar />
            </div>
            <h1 className="font-semibold text-4xl py-10 text-center">My-<span className="text-primary">Projects</span></h1>
            <div className="w-full grid grid-cols-2 gap-10 px-20">
                <div className="card">
                    <div className="absolute right-[-6rem] top-20 bg-altBg w-[40%] p-2 rounded-lg">
                        <h2 className="text-sm text-orange">Tailwind <span className="text-primary font-bold text-center text-lg">.</span> ReactJs <span className="text-primary font-bold text-center text-lg">.</span> Typescript</h2>
                        <h1 className="text-lg capitalize leading-[35px] py-3">Linkashare - made for links syncronization</h1>
                        <div className="flex justify-between px-8 pb-5">
                            <div className="flex">
                                <span className="pr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                                    <path d="M12 15a3 3 0 100-6 3 3 0 000 6z" />
                                    <path fillRule="evenodd" d="M1.323 11.447C2.811 6.976 7.028 3.75 12.001 3.75c4.97 0 9.185 3.223 10.675 7.69.12.362.12.752 0 1.113-1.487 4.471-5.705 7.697-10.677 7.697-4.97 0-9.186-3.223-10.675-7.69a1.762 1.762 0 010-1.113zM17.25 12a5.25 5.25 0 11-10.5 0 5.25 5.25 0 0110.5 0z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                preview</div>
                            <div>github</div>
                        </div>
                    </div>
                    <div>
                        <Image 
                            src={linkashare}
                            className="rounded-lg"
                        />
                    </div>
                </div>
            </div>

        </div>
     );
}
 
export default Projects;