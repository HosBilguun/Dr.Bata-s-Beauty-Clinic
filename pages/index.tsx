import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Homescreen from "../components/Homescreen";
import Middlepart from "../components/MiddleAdvertisement";
import Procedures from "../components/Procedures";
import Homepage from "./home";

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
<Homepage/>
  );
}
