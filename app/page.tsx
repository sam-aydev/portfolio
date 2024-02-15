import { Metadata } from "next";
import AllComp from "@/components/AllComponents";


export default function Home() {
    return(
        <AllComp/>
  );
}

export const metadata: Metadata ={
    title: "My Portfolio"
}
