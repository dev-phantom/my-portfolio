/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import { useRouter } from "next/router";
import Navbar from "../components/Navbar";
import Socials from "../components/Socials";
import Head from "next/head";

const HomePage = () => {
  const router = useRouter();

  const handleResume = (e) => {
    e.preventDefault();
    router.push(
      "https://drive.google.com/file/d/1Btmt92tNCLEk3DQLUk2jpAUIoi3M2nZN/view?usp=sharing"
    );
  };

  return (
    <div className="bg-bgColor w-full text-white">
      <Head>
        <title>home</title>
      </Head>
      <header className="pt-3">
        <Navbar />
      </header>

      <main className="w-full flex flex-col-reverse lg:flex-row justify-between items-center px-5 md:px-10 py-20 ">
        <div className="w-11/12 lg:w-1/2 px-0 md:px-4 pt-10">
          <div className="font-bold md:text-3xl text-2xl lg:text-5xl lg:text-left text-center">
            Hi! I'm <span className="text-primary">Elimihele</span> God’s Favour
          </div>
          <p className="md:w-[76%] w-full pt-5 leading-[30px] text-[16px] lg:text-[16px] mx-0 lg:mx-0 md:text-center md:text-lg md:mx-auto lg:text-left text-left">
            I am a skilled, experienced, and solution-oriented web developer, as
            well as an open-source contributor, experienced in building and
            maintaining software and software architecture.
          </p>
          <div className="flex justify-center items-center lg:flex lg:justify-start lg:items-start flex-col">
            <div className="py-5">
              <Socials />
            </div>
            <div>
              <button
                className="px-8 py-2 bg-primary text-center font-bold rounded-lg text-xl text-[#1E1E1E]"
                onClick={handleResume}
                target="_blank"
              >
                Resume
              </button>
            </div>
          </div>
        </div>

        <div className="w-11/12 lg:w-1/2 pl-0 lg:pl-40 flex items-center justify-center">
          <div className="flex items-center justify-center">
            <img
              src="https://res.cloudinary.com/phantom1245/image/upload/v1685475497/portfolio/Group_5_xbe5gw.png"
              alt="Picture of the author"
              className="md:w-[330px] w-[250px]"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src =
                  "https://res.cloudinary.com/phantom1245/image/upload/v1685475497/portfolio/Group_5_xbe5gw.png";
              }}
            />
          </div>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
