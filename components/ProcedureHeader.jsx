import React from "react";
import { Image, Card, CardFooter, Button, CardHeader } from "@nextui-org/react";

export default function App({ imgaddress, bio }) {
  console.log(imgaddress);
  return (
    <>
      <Card isFooterBlurred radius="lg" className="relative">
        <Image
          isBlurred
          shadow="none"
          width={1920}
          src={imgaddress}
          alt="NextUI Album Cover"
          radius="none"
          classNames="m-5"
        />
      </Card>
      <Card className="h-[300px] w-[full] bg-[#f2f2f2] rounded-none justify-center items-center">
        <CardHeader className="text-[26px] text-center max-w-[800px]">
         {bio}
        </CardHeader>
      </Card>
    </>
  );
}
