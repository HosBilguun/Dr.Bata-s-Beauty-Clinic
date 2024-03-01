import Image from "next/image";
import { Inter } from "next/font/google";
import Navbar from "../components/Navbar";
import Homescreen from "../components/Homescreen"

const inter = Inter({ subsets: ["latin"] });


export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Homescreen/>
      DR bata
    </div>
  );
}
