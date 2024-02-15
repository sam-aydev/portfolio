import Image from "next/image";
import LinkedIn from "@/public/linkedIn.png"
import Github from "@/public/github.png"
import Link from "next/link";


export default function Footer(){
    return(
        
        <div className="mt-20 border-t-2 border-t-black sm:flex sm:justify-between">
        <div>
            <p className="mt-3 font-medium text-center text-[23px]">sam-aydev</p>
        </div>
        <div className="flex justify-center space-x-10 mt-2 pb-8 sm:mt-5">
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
    )
}