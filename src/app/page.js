import Image from "next/image";

import Button from "@/components/Button";
import Testimonials from "@/components/Testimonials";

import placeholder from "../../public/images/placeholder-image.png";

export default function Home() {
  return (
    <main>
      <section>
        <div className="h-screen">
          <Image
            quality={100}
            src={placeholder}
            alt={""}
            fill
            style={{
              objectFit: "cover",
            }}
          />
        </div>
        <div className="absolute bottom-0 w-screen bg-gradient-to-t from-black text-white">
          <div className="w-full pb-16 pt-32">
            <div className="w-11/12 mx-auto text-4xl sm:text-5xl md:text-6xl mb-4 md:mb-8">
              <h2 className="my-1 md:my-4">Delicious Food</h2>
              <h2 className="my-1 md:my-4">for Special Occasions</h2>
              <hr className="border my-4 md:my-8 border-white" />
            </div>
          </div>
        </div>
      </section>
      <section className="flex flex-col justify-center w-11/12 m-auto max-w-4xl gap-8 mt-16 text-xl md:text-xl">
        <p>
          Bramble Catering has grown from pastoral roots and uses seasonal,
          high-quality ingredients to create food that is packed full of flavour
          and presented beautifully.
        </p>
        <p>
          Offering memorable food with discreet service for intimate dinners,
          private parties and everything in-between.
        </p>
        <Button link={"/services"} text={"Services"} color={"black"} />
        <p>
          We love to create bespoke menus and dishes which are tailored for you
          and your guests, and we’re experienced in providing for varying
          dietary requirements.
        </p>
        <p>
          In close consultation with you, we will ensure your event runs
          seamlessly. We can discreetly take care of the cooking, table laying
          and garnishing, serving and clearing so that you and your guests can
          relax and enjoy your precious time together.
        </p>
      </section>
      <section className="w-11/12 m-auto max-w-4xl mt-16">
        <div className="flex flex-wrap sm:flex-nowrap justify-center gap-8">
          <div>
            <Image quality={100} src={placeholder} alt="" width={500} />
          </div>
          <div>
            <Image quality={100} src={placeholder} alt="" width={500} />
          </div>
          <div>
            <Image quality={100} src={placeholder} alt="" width={500} />
          </div>
        </div>
        <div className="my-8">
          <Button link={"/gallery"} text={"See More"} color={"black"} />
        </div>
      </section>

      <Testimonials
        displayTag={"food"}
        message={
          "We work with amazing clients all the time, here is what they had to say..."
        }
      />
    </main>
  );
}
