import React from "react";
import { Accordion, AccordionItem, Card } from "@nextui-org/react";

export default function App() {
  const defaultContent =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  const [selectedKeys, setSelectedKeys] = React.useState(new Set("1"));
  // console.log(selectedKeys);
  return (
    <>
    <Card className="max-w-full h-[100px] flex items-center justify-center bg-[#7d94ba] ">
      <Card>

      </Card>
    </Card>
    <Card
      radius="none"
      className="max-w-full gap-5 h-auto p-16 flex items-center justify-center bg-white"
    >
      <Card className="w-[70vw] gap-5 h-auto p-16 flex items-center justify-center bg-cyan-50">
        <Accordion
          selectedKeys={selectedKeys}
          onSelectionChange={setSelectedKeys}
          variant="splitted"
          classNames={{
           heading : "bg-red"
          }}
        >
          <AccordionItem
            key="1"
            aria-label="Pre-Consultation"
            title="Pre-Consultation"
            subtitle="Step 1"
            indicator={(e) => console.log(e)}
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="2"
            aria-label="Consultation"
            title="Consultation"
            subtitle="Step 2"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="3"
            aria-label="Preparations & Surgery day"
            title="Preparations & Surgery day"
            subtitle="Step 3"
          >
            {defaultContent}
          </AccordionItem>
          <AccordionItem
            key="4"
            aria-label="Enjoy the Result"
            title="Enjoy the Result"
            subtitle="Step 4"
          >
            {defaultContent}
          </AccordionItem>
        </Accordion>
      </Card>
    </Card>
    </>
  );
}
