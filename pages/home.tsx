import Image from "next/image";
import { Inter, Marko_One } from "next/font/google";
import Navbar from "../components/Navbar";
import Homescreen from "../components/Homescreen";
import Middlepart from "../components/MiddleAdvertisement";
import Procedures from "../components/Procedures";
import Steps from "../components/Steps";
import Map from "../components/Map"

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <div>
      <Navbar/>
      <Homescreen/>
      <Middlepart/>
      <Procedures/>
      <Steps/>
      <Map/>
    </div>
  );
}
