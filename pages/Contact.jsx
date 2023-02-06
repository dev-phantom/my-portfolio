import { useState } from "react";
import Navbar from "../components/Navbar";
import Image from 'next/image';
import Head from 'next/head'
import Socials from '../components/Socials';


const Contact = () => {

    const[email,setEmail] = useState('');
    const[name,setName] = useState('');
    const[message,setMessage] = useState('');

    return ( 
        <div className=" w-full text-white">
            <Head>
                <title>contact-me</title>
            </Head>
            <div>
                <Navbar />
            </div>
            <h1 className="font-Ubuntu pt-6 text-primary font-bold text-[25px] text-center">GET IN TOUCH</h1>
            <h4 className="font-Ubuntu text-textColor text-[17px] py-2 font-normal text-center">I would love to hear from you</h4>
            <div className="flex w-full px-5 py-5 mb-10">
                <div className="w-1/2 hidden xl:flex lg:flex justify-center items-center">
                    <Image 
                    src="https://res.cloudinary.com/phantom1245/image/upload/v1674995766/portfolio/Screenshot_from_2023-01-29_13-33-11-removebg-preview_yt3ju4.png" 
                    alt="contact" 
                    width={400}
                    height={400}
                    />
                </div>
                <div className="w-full lg:w-1/2 flex justify-center items-center">
                    <form action="https://formsubmit.co/godsfavour1975@gmail.com" method="POST">
                        <div className="mt-5">
                            <label htmlFor=""  className='capitalize text-primary font-bold text-[17px] font-Nunito not-italic leading-9'>Full Name</label>
                        <input
                        type="text"
                        className="rounded-md h-10 pl-4 block w-full text-xl font-normal text-gray-700 bg-gray-300 bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:border-blue-600 focus:outline-none"
                        value={name}
                        onChange= {(e) => setName(e.target.value)}
                        />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="" className='capitalize text-primary font-bold text-[17px] font-Nunito not-italic leading-9'>Email Address</label>
                        <input
                        type="text"
                        className="rounded-md h-10 pl-4 block w-full text-xl font-normal text-gray-700 bg-gray-300 bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700  focus:border-blue-600 focus:outline-none"
                        value={email}
                        onChange= {(e) => setEmail(e.target.value)}
                        />
                        </div>
                        <div className="mt-5">
                            <label htmlFor="" className='capitalize text-primary font-bold text-[17px] font-Nunito not-italic leading-9'>Message</label>
                        <input
                        type="text"
                        className="rounded-md h-32 pl-4 block w-full text-xl font-normal text-gray-700 bg-gray-300 bg-clip-padding border-b border-solid border-gray-300 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        value={message}
                        onChange= {(e) => setMessage(e.target.value)}
                        />
                        </div>
                        <div className="mt-8">
                            <button className="bg-primary w-full py-3 text-bgColor rounded-lg" >Send</button>
                        </div>
                    </form>
                </div>
            </div>
            <div className='pr-0 md:pr-20 mt-4 md:mt-0 rotate-0 md:rotate-90 absolute bottom-[2] md:bottom-10 right-4'>
                <Socials/>
            </div>
        </div>
     );
}
 
export default Contact;
