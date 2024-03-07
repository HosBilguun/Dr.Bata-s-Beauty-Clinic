import React from "react";
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import { useRouter } from "next/router";

export default function App() {

    const router = useRouter();
    console.log(router)
    const { details } = router.query;
    console.log(details)

  return (
    <>
    <div>
        procedure place - {details}
    </div>
    </>
  );
}
