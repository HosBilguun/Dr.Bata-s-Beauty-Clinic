import React from "react";
import { Image } from "@nextui-org/react";

export default function App() {
  return (
    <div>
      <div style={{width:"700px", position:"absolute", zIndex:2, bottom:"220px", left:"200px"}}>
        <h1 style={{fontWeight:"bold", fontSize:"45px", marginBottom:"5px"}}> Helping You Find Confidence with Refined Plastic Surgery</h1>
        <p style={{fontSize:"20px", marginBottom:"5px"}}>
          Helping You Find Confidence with Refined Plastic Surgery Gentle
          surgical techniques, natural-looking results with minimal bruising,
          thin and barely visible scars, and virtually painless surgeries.
        </p>
      </div>
     <div style={{position:"relative", zIndex:1}}> <Image
        isBlurred
        width={1920}
        src="https://as2.ftcdn.net/v2/jpg/05/04/36/83/1000_F_504368311_TC893HlbhfqsA5vDFIsDaU9vBuIvk1lJ.jpg"
        alt="NextUI Album Cover"
        classNames="m-5"
      /></div>
    </div>
  );
}
