import Image from 'next/image'
import Navbar from "../components/Navbar"
import { FooterImg, PhantomImg } from '../assets';
const HomePage = () => {
    return ( 
        <div className="bg-bgColor w-full h-screen text-white">
            <header>
                <Navbar />
            </header>

            <main className='w-full flex justify-between items-center px-10 py-20 '>

                <div className='w-1/2 px-4 pt-10'>
                   <div className='font-bold text-3xl '>Hi! am <span className='text-primary'>Elimihele</span> God’s Favour</div> 
                   <p className='w-[72%] py-5 leading-[30px] text-[16px]'>
                    Am a skilled, experienced and Solution-oriented web-developer,
                    and an open-source contributor experienced in building and maintaining
                     software and software architecture
                   </p>
                   <div>
                    <button className='px-8 py-2 bg-primary text-center font-bold rounded-lg text-xl text-[#1E1E1E]'>Resume</button>
                   </div>
                </div>

                <div className='w-1/2 pl-40 flex items-center justify-center'>
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




