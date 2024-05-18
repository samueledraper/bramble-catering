import Hero from "@/components/Hero";

import testimonials from "@/json/testimonials.json";

import placeholder from "../../../public/images/placeholder-image.png";

export default function Testimonials() {
  return (
    <main>
      <Hero image={placeholder} alt={""} text={"Testimonials"} />
      <section className="w-11/12 max-w-4xl mx-auto pt-16">
        <p className="text-2xl">
          We work with amazing clients all the time, here is what they had to
          say...
        </p>
        <div className="md:flex gap-16 mt-8">
          <div className="md:w-1/2">
            {testimonials.map((testimonial) => {
              if (testimonial.tag === "food") {
                return (
                  <div className="mt-8 py-2" key={testimonial.id}>
                    <p className="text-xl">{testimonial.quote}</p>
                    <p className="mt-4 italic">
                      {testimonial.client}, {testimonial.location}.{" "}
                      {testimonial.event}.
                    </p>
                  </div>
                );
              }
            })}
          </div>
          <div className="md:w-1/2">
            {testimonials.map((testimonial) => {
              if (testimonial.tag === "team") {
                return (
                  <div className="mt-8 py-2" key={testimonial.id}>
                    <p className="text-xl">{testimonial.quote}</p>
                    <p className="mt-4 italic">
                      {testimonial.client}, {testimonial.location}.{" "}
                      {testimonial.event}.
                    </p>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
