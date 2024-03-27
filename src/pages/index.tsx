import BannerHome from "@/components/Layout/Banner";
import DestaquesHome from "@/components/Layout/Destaques";
import NavBar from "@/components/Layout/NavBar";
import InfoLoja from "@/components/Layout/Info/InfoLoja";

export default function Home() {
    return (
        <div>
            <NavBar />
            <BannerHome />
            <div className="bg-red-800 w-full py-1"></div>
            <DestaquesHome />
            {/* <div className="bg-red-800 w-full py-1"></div> */}
            <hr />
            <InfoLoja />
            <hr />
        </div>



    )
}