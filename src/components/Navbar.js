// src/components/CustomNavbar.js
'use client';

import React, { useState } from "react";
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button, Dropdown, DropdownMenu, DropdownTrigger, Avatar, DropdownItem } from "@nextui-org/react";
import { AcmeLogo } from "./AcmeLogo";

export default function CustomNavbar() {
  const [activeLink, setActiveLink] = useState("Customers");

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <Navbar isBordered isBlurred={false} style={{ padding: 20 }}>
      <NavbarBrand>
        <p className="font-bold text-inherit text-black">SUNU VOTE SN</p>
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        <NavbarItem>
          <Link
            className={`text-white ${activeLink === "Candidat" ? "bg-blue-300 text-white p-2 pr-3 pl-3 rounded-md" : ""}`}
            href="/vote/candidat"
            onClick={() => handleSetActiveLink("Candidat")}
            aria-current={activeLink === "Candidat" ? "page" : undefined}
          >
            Candidat
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`text-white ${activeLink === "MonVote" ? "bg-blue-300 text-white p-2 pr-3 pl-3 rounded-md" : ""}`}
            href="/vote/mon-vote"
            onClick={() => handleSetActiveLink("MonVote")}
            aria-current={activeLink === "MonVote" ? "page" : undefined}
          >
            Mon vote
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Avatar
              isBordered
              as="button"
              className="transition-transform"
              color="secondary"
              name="User"
              size="md"
              src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            />
          </DropdownTrigger>
          <DropdownMenu aria-label="Profile Actions" variant="flat">
            <DropdownItem key="profile" className="h-14 gap-2" style={dropdownStyles}>
              <p className="font-semibold">Connecté en tant que</p>
              <p className="font-semibold">user@example.com</p>
            </DropdownItem>
            
            <DropdownItem key="help_and_feedback" style={dropdownStyles}>Assistance</DropdownItem>
            <DropdownItem key="logout" color="danger" style={dropdownStyles}>Deconnexion</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}

const dropdownStyles = {
  color: 'black',
  hover: {
    backgroundColor: 'black',
    color: 'white',
  },
};
