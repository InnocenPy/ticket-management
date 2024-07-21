"use client";
import React from "react";
import Link from "next/link";
import { FaTasks } from "react-icons/fa";
import { usePathname } from "next/navigation";
import classnames from "classnames";

const Navbar = () => {
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Ticket", href: "/ticket" },
  ];

  const currentPath = usePathname();
  return (
    <nav className="flex space-x-6 border-b mb-5 p-5 text-center">
      <Link href={"/"}>
        {" "}
        <FaTasks />{" "}
      </Link>
      <ul className="flex space-x-6">
        {links.map((link) => (
          <Link
            key={link.href}
            className={classnames({
              "text-zinc-900": currentPath === link.href,
              "text-zinc-400": currentPath !== link.href,
              "hover:text-zinc-800 transition-colors": true,
            })}
            href={link.href}
          >
            {link.label}
          </Link>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
