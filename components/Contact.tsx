"use client"
import { useState } from "react";

export default function Contact(){
    
    const [ email, setEmail ] = useState("");
    const [ name, setName ] = useState("");
    const [ message, setMessage ] = useState("");
    const [ isLoading, setIsLoading ] = useState(false);
    const [ nofill, setNoFill ] = useState(false);
    const [ emailerr, setEmailErr ] = useState(false);
    const [ success, setSuccess ] = useState(false)


    async function handleSend(e:any){
        e.preventDefault()
        if(!name || !email || !message) {
            setNoFill(true);
            return;
        };

        if(email.includes("gmail.com") || 
        email.includes("yahoo.com") || 
        email.includes("outlook.com")){
            setEmailErr(true);
            return;
        }

        try{
            setIsLoading(true)
            const res = await fetch("/api/contact", {
                method: "POST", 
                body: JSON.stringify({
                    name, 
                    email, 
                    message
                })
            });

            if(res.ok){
                console.log(res)
                setSuccess(true)
            }else{

                console.log("big error")
            }
        }catch(error){
            console.log(error)
        }finally{
            setEmail("");
            setMessage("");
            setName("")
            setIsLoading(false)
        }
    }


    return(
        <div className="mt-7 sm:mt-14 ">
                <div className=" flex justify-center items-center flex-col">
                    <div>
                        <h2 className="text-center text-2xl font-medium sm:text-3xl">Contact</h2>
                        <p className="text-slate-600 font-medium text-center mt-4 sm:mx-auto sm:w-2/3">I would love to hear about your project and how I could help. 
                            Please fill in the form, and I will get back to you as soon as possible.
                        </p>
                    </div>

                    <form id="contact" onSubmit={handleSend} className="w-full mt-8 sm:w-2/3">
                        {nofill && <p className="text-center bg-slate-600 text-white p-2">Please make sure to fill in all the fields!</p>}
                        {success && <p className="text-center bg-green-700 text-white p-2">Message has been sent successfully!</p>}
                        <div>
                            <label className="block">EMAIL: <span className={emailerr ? "font-bold text-slate-900" : "text-slate-300"}>Only working email address is accepted!</span></label>
                            <input disabled={isLoading} value={email} onChange={(e)=>{
                                    setEmailErr(false);
                                    setNoFill(false)
                                    setEmail(e.target.value)
                                    }} type="email" className="border-b-2 p-1 outline-none w-full border-b-black"/>
                        </div>

                        <div className="mt-2">
                            <label className="block">NAME:</label>
                            <input disabled={isLoading} value={name} onChange={(e)=> {
                                    setEmailErr(false);
                                    setNoFill(false)
                                    setName(e.target.value)
                                }}  type="text" className="border-b-2 p-1 outline-none w-full border-b-black"/>
                        </div>

                        <div className="mt-2">
                            <label className="block">MESSAGE:</label>
                            <textarea disabled={isLoading}   value={message} onChange={(e)=> {
                                setEmailErr(false);
                                setNoFill(false);
                                setMessage(e.target.value)
                                }}  className="border-b-2 p-1 resize-none outline-none w-full border-b-black"></textarea>
                        </div>

                        <div className="mt-2">
                            <button disabled={isLoading}  className="font-medium py-2 border-b-2 border-b-green-600 hover:border-b-green-300">SEND MESSAGE</button>
                        </div>
                    </form>
                </div>
            </div>
    )
}