import React from "react";
import { Image, Card, CardFooter, Button, CardHeader } from "@nextui-org/react";

export default function App() {
  return (
    <>
      <Card isFooterBlurred radius="lg" className="relative">
        <Image
          isBlurred
          shadow="none"
          width={1920}
          src="https://as2.ftcdn.net/v2/jpg/05/04/36/83/1000_F_504368311_TC893HlbhfqsA5vDFIsDaU9vBuIvk1lJ.jpg"
          alt="NextUI Album Cover"
          classNames="m-5"
        />
        <CardHeader className="absolute flex flex-col !items-center w-[70%] h-[48%] justify-end z-10">
          <p style={{
            fontSize:"40px"
          }} 
          className="text-black/100 uppercase font-bold max-w-[700px]">
            Helping You Find Confidence with Refined Plastic Surgery
          </p>
          <h4 style={{
            
            fontSize:"2.5vh"
          }}  className="text-black font-large text-large max-w-[700px]">
            Gentle surgical techniques, natural-looking results with minimal
            bruising, thin and barely visible scars, and virtually painless
            surgeries.
          </h4>
        </CardHeader>
      </Card>
    </>
  );
}
