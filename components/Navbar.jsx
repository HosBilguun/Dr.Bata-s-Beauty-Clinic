import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";

export default function App() {
  return (
    <div>
            <Navbar class="bg-red-50" height={"40px"} shouldHideOnScroll>
    
      <NavbarContent className="hidden sm:flex gap-20" justify="end">
        <NavbarItem>
          <Link color="foreground" href="#">
            Location
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Phone Number
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Contacts
          </Link>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    {/* <div> TUSGAARLAGCH </div> */}
    <Navbar style={{boxShadow:"0.1px 1px 3px 1px"}} height={"90px"} >
      <NavbarBrand>
        <p className="font-bold text-inherit">Dr.Bata's beauty clinic</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
    </div>
  );
}
