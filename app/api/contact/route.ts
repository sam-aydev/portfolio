import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(req: Request){
    const { name, email, message } = await req.json();
    


    const { data, error } = await resend.emails.send({
        from: email,
        to: [`samueladetunji000@gmail.com`],
        subject: `A Business Talk From ${name}`,
        html: message
    });

    
    console.log(error, data)
    if(data) {
        return new NextResponse(JSON.stringify({success: "email sent"}))
    }


    if(error){
        return new NextResponse(JSON.stringify(
            {"error": "There is error sending email"}
            )
        )
    }
    
}