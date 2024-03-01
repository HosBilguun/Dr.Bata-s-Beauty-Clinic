import React from "react";
import { Image, Card, CardFooter, Button, CardHeader } from "@nextui-org/react";

export default function App() {
  return (
    <div>
      <Card isFooterBlurred radius="lg" className="border-none">
        <Image
          isBlurred
          shadow="none"
          radius="none"
          width={1920}
          src="https://as2.ftcdn.net/v2/jpg/05/04/36/83/1000_F_504368311_TC893HlbhfqsA5vDFIsDaU9vBuIvk1lJ.jpg"
          alt="NextUI Album Cover"
          classNames="m-5"
        />
        <CardHeader className="absolute z-10 top-1 flex-col !items-center">
          <p style={{
            
          }} 
          className="text-black/100 uppercase font-bold max-w-[400px]">
            Helping You Find Confidence with Refined Plastic Surgery
          </p>
          <h4 className="text-white font-medium text-large">
            Gentle surgical techniques, natural-looking results with minimal
            bruising, thin and barely visible scars, and virtually painless
            surgeries.
          </h4>
        </CardHeader>
      </Card>
    </div>
  );
}
