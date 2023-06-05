import Navbar from "../components/Navbar";
import Socials from '../components/Socials';
import Footer from '../components/Footer';

import Head from 'next/head'

const About = () => {
    return ( 
        <div className="bg-bgColor w-full text-white">
            <Head>
                <title>About Me - Phantom Portfolio 🚀</title>
            </Head>
            <div>
                <Navbar />
            </div>
            <h1 className="m-6rem font-semibold text-3xl md:text-4xl py-10 text-center">About-<span className="text-primary">Me</span></h1>
            <div className="w-full flex justify-center items-center ">
                <p className="font-[500] bg-altBg w-11/12 md:w-[80%] md:text-4xl p-5 md:p-12 rounded-lg leading-[2.3rem] md:leading-[40px]">
                    I am a <span className="text-secondary">diligent</span> web developer/designer & an open source contributor with 5 years of experience in building user-friendly web-applications & web-sites. 
                    Highly skilled in communication, <span className="text-secondary">collaboration,</span> and designing of appealing user-centered, and friendly interfaces, Building and designing responsive web components, with modern technologies such as HTML, CSS & Javascript including frameworks/library like, 
                    <span className="text-secondary">ReactJs,</span> NextJs, Typescript, JQuery and css libraries such as TailwindCss, ChakraUi, bootstrap, SCSS e.t.c.
                    I also use <span className="text-secondary">Firebase</span> & Supabase as a BaaS technology and <span className="text-secondary">Github</span> & Bitbucket
                    as a cloud storage technology 
                </p>
            </div>
            <div className=" px-10 md:px-20 lg:px-40">
                <h1 className="font-semibold text-2xl py-10 ">My <span className="text-primary">Experiences</span></h1>
                <div className="grid grid-col-1 md:grid-cols-2 w-full gap-10">
                    <div className="bg-altBg rounded-lg  p-4 border-l-2 border-orange">
                       <h2 className="text-xl font-bold py-1 capitalize ">Praisetech <span className="text-secondary">Enterprise</span></h2>
                       <h4 className="font-medium text-md ">senior web developer</h4> 
                       <h3 className="text-lg font-medium py-1 text-orange">2021-2023</h3>
                       <p className="text-md font-medium ppr-3 md:pr-20">Praise Tech is an enterprise that deals with delivering highly proficient websites just in time
                       I led the frontend team and created some user friendly and responsive websites, i also co-ordinated the junior devs and interns there.
                       </p>
                    </div>

                    <div className="bg-altBg rounded-lg p-4 border-l-2 border-orange">
                       <h2 className="text-xl font-bold py-1 capitalize ">Exedox <span className="text-secondary">Team</span></h2>
                       <h4 className="font-medium text-md ">Senior-frontend web developer</h4> 
                       <h3 className="text-lg font-medium py-1 text-orange">2019-2021</h3>
                       <p className="text-md font-medium pr-3 md:pr-20">Exedox is a great team of developers that 
                       collaborate to solve problem driven tasks and build awesome projects
                       </p>
                    </div>

                    <div className="bg-altBg rounded-lg p-4 border-l-2 border-orange">
                       <h2 className="text-xl font-bold py-1 capitalize ">CodeCube <span className="text-secondary">Millenials</span></h2>
                       <h4 className="font-medium text-md ">Junior-frontend web developer</h4> 
                       <h3 className="text-lg font-medium py-1 text-orange">2018-2019</h3>
                       <p className="text-md font-medium pr-3 md:pr-20">Code cube is a software company that provides 
                       simple tech solutions for businesses, individuals and companies.
                       </p>
                    </div>
                </div>
                
            </div>
            <div className='py-3 pr-20 absolute right-4'>
                <Socials/>
            </div>
            <Footer />
        </div>
     );
}
 
export default About;
