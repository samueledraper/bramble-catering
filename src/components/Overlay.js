import Image from "next/image";
import Link from "next/link";

import blackLogo from "../../public/logo/bramblecatering-logo-black.png";

export default function Overlay({
  toggleOverlay,
  toggleServicesNav,
  servicesNav,
  closeServicesNav,
}) {
  function closeOverlay() {
    toggleOverlay();
    closeServicesNav();
  }

  return (
    <div className="fixed top-0 left-0 h-screen w-screen bg-white text-2xl text-black">
      <div className="flex justify-between items-center w-11/12 m-auto pt-8 pb-4">
        <Link href={"/"} onClick={closeOverlay}>
          <Image
            quality={100}
            src={blackLogo}
            alt="Bramble Catering Logo"
            height={45}
          />
        </Link>
        <svg
          onClick={closeOverlay}
          width="23"
          height="23"
          viewBox="0 0 23 23"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M1 1L22 22M1 22L22 1" stroke="black" />
        </svg>
      </div>

      <nav className="w-11/12 m-auto">
        <ul className="flex flex-col gap-8 mt-16">
          <li>
            <Link onClick={closeOverlay} href={"/our-story"}>
              Our Story
            </Link>
            <hr className="border-black mt-2" />
          </li>

          <li>
            <div className="flex items-baseline justify-between">
              <Link onClick={closeOverlay} href={"/services"}>
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
                    <path d="M1 16L14 1L27 16" stroke="black" />
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
                    <path d="M1 1L14 15L27 1" stroke="black" />
                  </svg>
                )}
              </span>
            </div>
            {servicesNav && (
              <nav>
                <ul className="flex flex-col gap-2 my-2 text-base pl-2">
                  <li>
                    <Link
                      href={"/services/bespoke-dining"}
                      onClick={closeOverlay}
                    >
                      Bespoke Dining
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/services/canape-events"}
                      onClick={closeOverlay}
                    >
                      Canape Events
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/services/holiday-catering"}
                      onClick={closeOverlay}
                    >
                      Holiday Catering
                    </Link>
                  </li>
                  <li>
                    <Link
                      href={"/services/life-celebrations"}
                      onClick={closeOverlay}
                    >
                      Life Celebrations
                    </Link>
                  </li>
                </ul>
              </nav>
            )}
            <hr className="border-black mt-2" />
          </li>

          <li>
            <Link onClick={closeOverlay} href={"/gallery"}>
              Gallery
            </Link>
            <hr className="border-black mt-2" />
          </li>

          <li>
            <Link onClick={closeOverlay} href={"/testimonials"}>
              Testimonials
            </Link>
            <hr className="border-black mt-2" />
          </li>

          <li>
            <Link onClick={closeOverlay} href={"/contact"}>
              Contact
            </Link>
            <hr className="border-black mt-2" />
          </li>
        </ul>
      </nav>
    </div>
  );
}
