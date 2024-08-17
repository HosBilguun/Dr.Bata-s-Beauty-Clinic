import React from "react";
import { Image, Card, CardFooter, Button, CardHeader } from "@nextui-org/react";

export default function App() {

  return (
    <>
      <Card isFooterBlurred shadow="none" radius="none" className="w-[full] max-h-[50%] h-[400px] justify-center items-center">
        <Card shadow="none" className="w-[60%] h-[100%] columns-2">
            <div>a</div>
            <div>b</div>
        </Card>
      </Card>
    </>
  );
}
