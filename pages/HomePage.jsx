import Image from 'next/image'
import { useRouter } from 'next/router'
import Navbar from "../components/Navbar"
import { FooterImg, PhantomImg } from '../assets';
import Socials from '../components/Socials';
const HomePage = () => {
    const router = useRouter()
      const handleResume = (e) => {
            e.preventDefault()
            router.push("https://drive.google.com/file/d/1v55ZM2hpi60JN0fZfZoEgRzDOyBFMfSp/view?usp=sharing")
        }
    return ( 
        <div className="bg-bgColor w-full h-screen text-white">
            <header>
                <Navbar />
            </header>

            <main className='w-full flex flex-col-reverse lg:flex-row justify-between items-center px-5 md:px-10 py-20 '>

                <div className='w-11/12 lg:w-1/2 px-0 md:px-4 pt-10'>
                   <div className='font-bold md:text-3xl text-2xl md:text-left text-center'>Hi! am <span className='text-primary'>Elimihele</span> God’s Favour</div> 
                   <p className='md:w-[76%] w-full pt-5 leading-[30px] text-[16px] md:text-left text-center'>
                    Am a skilled, experienced and Solution-oriented web-developer,
                    and an open-source contributor experienced in building and maintaining
                     software and software architecture
                   </p>
                   <div className="flex justify-center items-center md:flex md:justify-start md:items-start flex-col">
                    <div className='py-3'>
                        <Socials/>
                    </div>
                    <div>
                            <button className='px-8 py-2 bg-primary text-center font-bold rounded-lg text-xl text-[#1E1E1E]' onClick={handleResume} target="_blank">Resume</button>
                    </div>
                   </div>
                </div>

                <div className='w-11/12 lg:w-1/2 pl-0 lg:pl-40 flex items-center justify-center'>
                    <div className='flex items-center justify-center'>
                        <Image
                        src={PhantomImg}
                        alt="Picture of the author"
                        width={300}
                        
                        />
                    </div>
                </div>

            </main>

            <footer className="w-full ">
                <Image
                    src={FooterImg}
                    alt="Picture of the author"
                    className='w-full h-1/2'
                    
                />
            </footer>
        </div>
     );
}
 
export default HomePage;




