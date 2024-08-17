import React from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import ProcedureHeader from "../../components/ProcedureHeader";
import Procedure1 from "../../components/Procedure1"

export default function App() {
  const router = useRouter();
  const { details } = router.query;
  console.log(details);

  return (
    <>
      <Navbar />
      <ProcedureHeader
        bio=" When it comes to specific areas of the body, diet and exercise,
          although important, will not make much of a difference. The following
          body procedures can help remove excess skin or unwanted pockets of
          fat, contour the body’s shape, and improve the body’s overall
          appearance."
        imgaddress="https://www.harmychplasticsurgery.com/wp-content/uploads/2015/12/header-image-lips.jpg"
      />
      <Procedure1/>
    </>
  );
}
