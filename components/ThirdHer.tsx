import Newsletter from "@/public/newsletter.png"
import Hurdle from "@/public/Hurdle App.png"
import Ipaddress from "@/public/IP Address.png"
import Multistep from "@/public/MultiStep Form.png"
import Coursecreation from "@/public/Course Creation App.png"
import Simpleusermanagement from "@/public/Simple User Management App.png"
import Link from "next/link";
import Image from "next/image";


export default function ThirdHero(){
    return(
        <div className="mt-8 ">
                <div>
                    <h2 className="text-3xl font-semibold">Projects</h2>
                </div>
                
                <div className="sm:grid sm:grid-cols-2 md:gap-x-20 lg:grid-cols-3 lg:gap-x-2 sm:mx-auto lg:px-10 xl:px-16">
                    <div className="mt-6 bg-black dark:bg-white w-[97%] h-fit p-2 pb-5 mx-auto rounded-2xl">
                        <Image
                        src={Newsletter}
                        alt="newsletter"
                        width={1000}
                        height={10}
                        className="mx-auto rounded-xl "
                        />  
                        <h2 className="text-lg mt-3 text-slate-100 text-center font-semibold">NEWSLETTER SIGNUP</h2>
                        <div className="gap-3 flex mt-2 px-4 mx-auto">
                            <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/3 font-medium">HTML</p>
                            <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/3 font-medium">REACT</p>
                            <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/3 font-medium">TAILWIND</p>
                        </div>
                        <div className="text-white flex justify-between px-4 mt-4">
                            <Link href="https://responsive-newsletter-with-validation.vercel.app" className="border-b-2 border-b-green-600 py-1 hover:border-b-green-200">VISIT WEBSITE</Link>
                            <Link href="https://github.com/sam-aydev/responsive-newsletter-with-validation" className="border-b-2 border-b-green-600 py-1 hover:border-b-green-200">VIEW CODE</Link>
                        </div>
                    </div>

                    <div className="mt-6 bg-black dark:bg-white w-[97%] h-fit p-2 pb-5 mx-auto rounded-2xl">
                        <Image
                        src={Hurdle}
                        alt="hurdle landing page"
                        width={1000}
                        height={10}
                        className="mx-auto rounded-xl"
                        />  
                        <h2 className="text-lg mt-3 text-slate-100 text-center font-semibold">HURDLE LANDING PAGE</h2>
                        <div className="gap-3 flex mt-2 px-4">
                            <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/3 font-medium">HTML</p>
                            <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/3 font-medium">REACT</p>
                            <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/3 font-medium">TAILWIND</p>
                        </div>
                        <div className="text-white flex justify-between px-4 mt-4">
                            <Link href="https://hurdle-appsam.vercel.app" className="border-b-2 border-b-green-600 py-1 hover:border-b-green-200">VISIT WEBSITE</Link>
                            <Link href="https://github.com/sam-aydev/hurdle_app" className="border-b-2 border-b-green-600 py-1 hover:border-b-green-200">VIEW CODE</Link>
                        </div>
                    </div>

                    <div className="mt-6 bg-black dark:bg-white w-[97%] h-fit p-2 pb-5 mx-auto rounded-2xl">
                        <Image
                        src={Ipaddress}
                        alt="IP Address"
                        width={1000}
                        height={10}
                        className="mx-auto rounded-xl"
                        />  
                        <h2 className="text-lg mt-3 text-slate-100 text-center font-semibold">IP ADDRESS TRACKER</h2>
                        <div className="gap-3 flex mt-2 px-4">
                            <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/3 font-medium">HTML</p>
                            <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/3 font-medium">REACT</p>
                            <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/3 font-medium">TAILWIND</p>
                        </div>
                        <div className="text-white flex justify-between px-4 mt-4">
                            <Link href="https://ip-address-tracker-sigma-six.vercel.app" className="border-b-2 border-b-green-600 py-1 hover:border-b-green-200">VISIT WEBSITE</Link>
                            <Link href="https://github.com/sam-aydev/ip-address-tracker" className="border-b-2 border-b-green-600 py-1 hover:border-b-green-200">VIEW CODE</Link>
                        </div>
                    </div>

                    <div className="mt-6 bg-black dark:bg-white w-[97%] h-fit p-2 pb-5 mx-auto rounded-2xl">
                        <Image
                        src={Multistep}
                        alt="multistep form"
                        width={1000}
                        height={10}
                        className="mx-auto rounded-xl"
                        />  
                        <h2 className="text-lg mt-3 text-slate-100 text-center font-semibold">MULTISTEP FORM</h2>
                        <div className="gap-3 flex mt-2 px-4">
                            <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/3 font-medium">HTML</p>
                            <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/3 font-medium">REACT</p>
                            <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/3 font-medium">TAILWIND</p>
                        </div>
                        <div className="text-white flex justify-between px-4 mt-4">
                            <Link href="https://multistep-nu.vercel.app" className="border-b-2 border-b-green-600 py-1 hover:border-b-green-200">VISIT WEBSITE</Link>
                            <Link href="https://github.com/sam-aydev/multistep" className="border-b-2 border-b-green-600 py-1 hover:border-b-green-200">VIEW CODE</Link>
                        </div>
                    </div>
                    
                    <div className="mt-6 bg-black dark:bg-white w-[97%] h-fit p-2 pb-5 mx-auto rounded-2xl">
                        <Image
                        src={Coursecreation}
                        alt="course creation app"
                        width={1000}
                        height={10}
                        className="mx-auto rounded-xl"
                        />  
                        <h2 className="text-lg mt-3 text-slate-100 text-center font-semibold">Course Creation App</h2>
                        <div className=" mt-2 px-4 space-y-3">
                            <div className="flex gap-3">
                                <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/3 font-medium">HTML</p>
                                <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/3 font-medium">REACT</p>
                                <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/3 font-medium">TAILWIND</p>
                            </div>
                            <div className="flex gap-3">
                                <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/2 font-medium">REACT QUERY</p>
                                <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/2 font-medium">SUPABASE</p>
                            </div>
                        </div>
                        <div className="text-white flex justify-between px-4 mt-4">
                            <Link href="https://mlearn-sam-aydev.vercel.app" className="border-b-2 border-b-green-600 py-1 hover:border-b-green-200">VISIT WEBSITE</Link>
                            <Link href="https://github.com/sam-aydev/mLear" className="border-b-2 border-b-green-600 py-1 hover:border-b-green-200">VIEW CODE</Link>
                        </div>
                    </div>

                    <div className="mt-6 bg-black dark:bg-white w-[97%] h-fit p-2 pb-5 mx-auto rounded-2xl">
                        <Image
                        src={Simpleusermanagement}
                        alt="simple user management"
                        width={1000}
                        height={10}
                        className="mx-auto rounded-xl"
                        />  
                        <h2 className="text-lg mt-3 text-slate-100 text-center font-semibold">SIMPLE USER MANAGEMENT</h2>
                        <div className=" mt-2 px-4 space-y-3">
                            <div className="flex gap-3">
                                <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/3 font-medium">NEXT</p>
                                <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/3 font-medium">REACT</p>
                                <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/3 font-medium">TAILWIND</p>
                            </div>
                            <div className="flex gap-3">
                                <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/2 font-medium">NEXT AUTH</p>
                                <p className="text-sm text-center text-black p-2 rounded-lg bg-white w-1/2 font-medium">MONGODB</p>
                            </div>
                        </div>
                        <div className="text-white flex justify-between px-4 mt-4">
                            <Link href="https://next-usermanage.vercel.app" className="border-b-2 border-b-green-600 py-1 hover:border-b-green-200">VISIT WEBSITE</Link>
                            <Link href="https://github.com/sam-aydev/next_usermanage" className="border-b-2 border-b-green-600 py-1 hover:border-b-green-200">VIEW CODE</Link>
                        </div>
                    </div>

                </div>

            </div>
    )
}