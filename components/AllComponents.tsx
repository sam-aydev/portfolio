import FirstHero from "./FirstHero";
import SecondHero from "./SecondHero";
import ThirdHero from "./ThirdHer";
import Contact from "./Contact";
import Footer from "./Footer";

export default function AllComp(){


    return (
    <div>
        <div className="px-6 sm:px-12">
            <FirstHero/>
            <SecondHero/>
            <ThirdHero/>
            <Contact/>
            <Footer/>
        </div>
    </div>
    )
}