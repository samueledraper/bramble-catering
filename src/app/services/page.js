import Image from "next/image";
import Link from "next/link";

import Hero from "@/components/Hero";
import Button from "@/components/Button";

import placeholder from "../../../public/images/placeholder-image.png";

export default function Services() {
  return (
    <main>
      <Hero image={placeholder} alt={""} text={"Services"} />
      <section className="flex flex-col justify-center w-11/12 m-auto max-w-4xl gap-8 my-16 text-lg md:text-xl">
        <p className="text-xl md:text-2xl">
          Whether it is an intimate dinner or big celebration; a weekend getaway
          or a holiday abroad we would love to help make your occasion
          exceptional with beautiful and delicious food.
        </p>
        <Button link={"/contact"} text={"Get in Touch"} color={"black"} />
        <p>
          We love to create bespoke menus and dishes which are tailored for you
          and your guests, and we are experienced in providing for varying
          dietary requirements.
        </p>
        <p>
          In close consultation with you, we will ensure your event runs
          seamlessly. We can discreetly take care of the cooking, table laying
          and garnishing, serving and clearing so that you and your guests can
          relax and enjoy your precious time together.
        </p>
        <p>
          We are able to offer flexibility with travel throughout the UK and
          abroad, and we relish in using local ingredients from local producers.
        </p>
      </section>
      <section>
        <ul className="w-11/12 max-w-4xl mx-auto">
          <li>
            <Link href={"/services/bespoke-dining"}>
              <div className="relative h-48 md:h-64  my-4">
                <Image
                  className="w-full h-full"
                  src={placeholder}
                  alt=""
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className="absolute bottom-0 flex justify-center items-end h-1/2 w-full bg-gradient-to-t from-black text-white">
                  <div className="w-11/12 mx-auto text-xl sm:text-3xl md:text-5xl mb-2">
                    <h2>Bespoke Dining</h2>
                    <hr className="border my-2 md:my-8 border-white" />
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/services/canape-events"}>
              <div className="relative h-48 md:h-64  my-4">
                <Image
                  className="w-full h-full"
                  src={placeholder}
                  alt=""
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className="absolute bottom-0 flex justify-center items-end h-1/2 w-full bg-gradient-to-t from-black text-white">
                  <div className="w-11/12 mx-auto text-xl sm:text-3xl md:text-5xl mb-2">
                    <h2>Canapé Events</h2>
                    <hr className="border my-2 md:my-8 border-white" />
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/services/holiday-catering"}>
              <div className="relative h-48 md:h-64  my-4">
                <Image
                  className="w-full h-full"
                  src={placeholder}
                  alt=""
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className="absolute bottom-0 flex justify-center items-end h-1/2 w-full bg-gradient-to-t from-black text-white">
                  <div className="w-11/12 mx-auto text-xl sm:text-3xl md:text-5xl mb-2">
                    <h2>Holiday Catering</h2>
                    <hr className="border my-2 md:my-8 border-white" />
                  </div>
                </div>
              </div>
            </Link>
          </li>
          <li>
            <Link href={"/services/life-celebrations"}>
              <div className="relative h-48 md:h-64  my-4">
                <Image
                  className="w-full h-full"
                  src={placeholder}
                  alt=""
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
                <div className="absolute bottom-0 flex justify-center items-end h-1/2 w-full bg-gradient-to-t from-black text-white">
                  <div className="w-11/12 mx-auto text-xl sm:text-3xl md:text-5xl mb-2">
                    <h2>Life Celebrations</h2>
                    <hr className="border my-2 md:my-8 border-white" />
                  </div>
                </div>
              </div>
            </Link>
          </li>
        </ul>
      </section>
    </main>
  );
}
