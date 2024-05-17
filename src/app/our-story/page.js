import Image from "next/image";

import Hero from "@/components/Hero";
import Button from "@/components/Button";
import Testimonials from "@/components/Testimonials";

import placeholder from "../../../public/images/placeholder-image.png";

export default function OurStory() {
  return (
    <main>
      <Hero image={placeholder} alt={""} text={"Our Story"} />
      <section className="flex flex-col justify-center w-11/12 m-auto max-w-4xl gap-8 mt-16 text-lg md:text-xl">
        <p>
          From a young age, Katy would help her mother to cook nourishing food
          from their farmhouse kitchen. Meals were centred around home produce;
          meat reared on the farm, eggs laid by the hens, seasonal vegetables
          from the garden and fruit grown in the orchard.
        </p>
        <p>
          Days revolved around family mealtimes; even during harvest-time in the
          summer, when the farm was at its busiest, work would pause for a
          lunchtime picnic in the corn field.
        </p>
        <div className="md:flex justify-between content-center gap-16 my-8">
          <div className="relative w-full h-96 sm:h-72 lg:h-96 mx-auto ">
            <Image
              src={placeholder}
              alt=""
              fill
              style={{ objectFit: "cover" }}
              className="w-full h-full"
            />
          </div>
          <div className="mt-8 sm:mt-0 flex flex-col justify-evenly">
            <div>
              <p className="text-xl md:text-2xl">
                Bramble Catering offers memorable food with discreet service for
                intimate dinners, private parties and everything in-between.
              </p>
              <p className="mt-4 italic mb-8 sm:mb-0">
                Katy, Bramble Catering Founder
              </p>
            </div>
            <Button link={"/contact"} text={"Get in Touch"} color={"black"} />
          </div>
        </div>
        <p>
          After starting her career using her Environmental Geoscience degree
          from the University of Bristol, Katy decided to pursue her ambition of
          becoming a chef, and trained at Leiths School of Food and Wine.
        </p>
        <p>
          Since then, she has worked as a chef in London, Scotland, France and
          Switzerland and set up her own food-delivery business during the
          lockdown period.
        </p>
      </section>
      <Testimonials
        displayTag={"team"}
        message={"Here is what people had to say about working with us..."}
      />
    </main>
  );
}
