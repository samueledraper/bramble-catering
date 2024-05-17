"use client";

import { useEffect, useState } from "react";

import Image from "next/image";
import Link from "next/link";

import Overlay from "./Overlay";

import whiteLogo from "../../public/logo/bramblecatering-logo-white.png";

export default function Header() {
  const [servicesNav, setServicesNav] = useState(false);
  const [overlay, setOverlay] = useState(false);
  const [headerBackground, setHeaderBackground] = useState(false);

  const scroll = 1;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= scroll) {
        setHeaderBackground(true);
      } else {
        setHeaderBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function toggleServicesNav() {
    setServicesNav(!servicesNav);
  }

  function closeServicesNav() {
    setServicesNav(false);
  }

  function toggleOverlay() {
    setOverlay(!overlay);
  }

  return (
    <header
      className={`fixed z-10 top-0 w-screen pt-8 pb-4 text-white ${
        headerBackground ? "bg-brandGreen" : ""
      }`}
    >
      <div className="flex justify-between items-center w-11/12 m-auto text-2xl">
        <Link href={"/"} onClick={closeServicesNav}>
          <Image
            quality={100}
            src={whiteLogo}
            alt="Bramble Catering Logo"
            height={45}
          />
        </Link>
        <nav className="hidden lg:block">
          <ul className="flex gap-8">
            <li>
              <Link href={"/our-story"} onClick={closeServicesNav}>
                Our Story
              </Link>
            </li>
            <li className="flex items-baseline">
              <Link href={"/services"} onClick={closeServicesNav}>
                Services
              </Link>
              <span className="cursor-pointer ml-2">
                {servicesNav ? (
                  <svg
                    onClick={toggleServicesNav}
                    width="28"
                    height="16"
                    viewBox="0 0 28 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 16L14 1L27 16" stroke="white" />
                  </svg>
                ) : (
                  <svg
                    onClick={toggleServicesNav}
                    width="28"
                    height="16"
                    viewBox="0 0 28 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M1 1L14 15L27 1" stroke="white" />
                  </svg>
                )}
              </span>
            </li>
            <li>
              <Link href={"/gallery"} onClick={closeServicesNav}>
                Gallery
              </Link>
            </li>
            <li>
              <Link href={"/testimonials"} onClick={closeServicesNav}>
                Testimonials
              </Link>
            </li>
            <li>
              <Link href={"/contact"} onClick={closeServicesNav}>
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <svg
          className="lg:hidden"
          onClick={toggleOverlay}
          width="28"
          height="18"
          viewBox="0 0 28 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1H28M0 9H27M0 17H14" stroke="white" />
        </svg>

        {overlay && (
          <Overlay
            toggleOverlay={toggleOverlay}
            toggleServicesNav={toggleServicesNav}
            closeServicesNav={closeServicesNav}
            servicesNav={servicesNav}
          />
        )}
      </div>
      {servicesNav && (
        <nav className="hidden lg:flex justify-end w-11/12 m-auto pt-2">
          <ul className="flex gap-4 xl:gap-8">
            <li>
              <Link
                href={"/services/bespoke-dining"}
                onClick={closeServicesNav}
              >
                Bespoke Dining
              </Link>
            </li>
            <li>
              <Link href={"/services/canape-events"} onClick={closeServicesNav}>
                Canape Events
              </Link>
            </li>
            <li>
              <Link
                href={"/services/holiday-catering"}
                onClick={closeServicesNav}
              >
                Holiday Catering
              </Link>
            </li>
            <li>
              <Link
                href={"/services/life-celebrations"}
                onClick={closeServicesNav}
              >
                Life Celebrations
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}
