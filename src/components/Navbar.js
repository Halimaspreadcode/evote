// src/components/CustomNavbar.js
'use client';

import React, { useState, useEffect } from "react";
import { useRouter } from 'next/router';
import { Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Dropdown, DropdownMenu, DropdownTrigger, Avatar, DropdownItem } from "@nextui-org/react";

export default function CustomNavbar() {
  const router = useRouter();
  const [activeLink, setActiveLink] = useState("");

  useEffect(() => {
    if (router.pathname.includes("candidat")) {
      setActiveLink("Candidat");
    } else if (router.pathname.includes("mon-vote")) {
      setActiveLink("MonVote");
    }
  }, [router.pathname]);

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
          >
            Candidat
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link
            className={`text-white ${activeLink === "MonVote" ? "bg-blue-300 text-white p-2 pr-3 pl-3 rounded-md" : ""}`}
            href="/vote/mon-vote"
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
            <DropdownItem key="profile" className="h-14 gap-2 text-black">
              <p className="font-semibold text-black">Connecté en tant que</p>
              <p className="font-semibold text-black">user@example.com</p>
            </DropdownItem>
            <DropdownItem key="help_and_feedback" className="text-black">Assistance</DropdownItem>
            <DropdownItem key="logout" color="danger" className="text-black">Déconnexion</DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </NavbarContent>
    </Navbar>
  );
}
