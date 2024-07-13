import Link from "next/link";
import Image from "next/image";
import PortImage from "@/public/guy.jpg";
import LinkedIn from "@/public/linkedIn.png";
import Github from "@/public/github.png";

export default function FirstHero() {
  return (
    <div>
      <div className="sm:flex sm:justify-between">
        <div>
          <p className="font-semibold text-center text-[23px] font-mono">
            sam-aydev
          </p>
        </div>
        <div className="flex justify-center space-x-10 sm:mt-2 sm:space-x-6 mt-4">
          <Link href="https://www.linkedin.com/in/samuel-adetunji-3587422ab">
            <Image
              src={LinkedIn}
              width={200}
              height={2}
              alt="linkedIn"
              className="w-7 h-7"
            />
          </Link>
          <Link href="https://github.com/sam-aydev">
            <Image
              src={Github}
              width={200}
              height={2}
              alt="Github"
              className="w-7 h-7"
            />
          </Link>
        </div>
      </div>

      <div className="sm:flex sm:flex-row-reverse sm:space-x-4 sm:mt-10">
        <div className="mt-4 sm:w-1/2 sm:px-3">
          <Image
            src={PortImage}
            alt="profile img"
            width={1000}
            height={10}
            className="rounded-2xl  w-80 mx-auto h-60 sm:h-72 lg:h-96 lg:w-96 lg:rounded-full"
          />
        </div>

        <div className="flex mt-3 flex-col sm:w-1/2 sm:px-3">
          <p className="text-3xl font-semibold text-center lg:mt-8 sm:text-left md:text-4xl lg:text-5xl">
            Nice to meet you!
            <br />
            I'm{" "}
            <span className="underline text-green-600">Adetunji Samuel</span>.
          </p>
          <p className="text-center mt-5 text-slate-500 font-medium sm:text-left lg:text-xl">
            Based in Nigeria. I am a full-stack developer with{" "}
            <b>2 years of experience</b>, I enjoy building complex app for both
            the frontend and backend, with a primary aim to improve users
            experience on any software.
          </p>
          <div className="mt-5 flex flex-col sm:flex-row sm:space-x-4 sm:space-y-0 space-y-3">
            <a
              href="#contact"
              className=" 
                        border-b-2 
                        border-b-green-600 
                        font-medium
                        py-2
                        hover:border-b-green-300
                        hover:text-slate-600"
            >
              CONTACT ME
            </a>

            <Link
              href="/MY CV .pdf"
              locale={false}
              className=" 
                        border-b-2 
                        border-b-green-600 
                        font-medium
                        py-2
                        hover:border-b-green-300
                        hover:text-slate-600"
            >
              DOWNLOAD CV
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
