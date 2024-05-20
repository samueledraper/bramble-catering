import Image from "next/image";

import Hero from "@/components/Hero";
import Button from "@/components/Button";
import Testimonials from "@/components/Testimonials";

import placeholder from "../../../../public/images/placeholder-image.png";

export default function HolidayCatering() {
  return (
    <main>
      <Hero image={placeholder} alt={""} text={"Holiday Catering"} />
      <section className="flex flex-col justify-center w-11/12 m-auto max-w-4xl gap-8 pt-16 text-lg md:text-xl">
        <p className="text-xl md:text-2xl">
          Whether it’s an intimate dinner or big celebration; a weekend getaway
          or a holiday abroad we would love to help make your occasion
          exceptional with beautiful and delicious food.
        </p>
        <Button link={"/contact"} text={"Get in Touch"} color={"black"} />
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
      <Testimonials displayTag={"food"} />
    </main>
  );
}
