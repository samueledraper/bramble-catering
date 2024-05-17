import Hero from "@/components/Hero";
import ContactForm from "@/components/ContactForm";

import placeholder from "../../../public/images/placeholder-image.png";

export default function Contact() {
  return (
    <main>
      <Hero image={placeholder} alt={""} text={"Contact"} />
      <section className="w-11/12 max-w-4xl mx-auto pt-16">
        <p className="text-2xl my-4">
          Please get in touch via email or the contact form below.
        </p>
        <p className="text-2xl my-4 mb-16">
          We look forward to hearing from you.
        </p>
        <a
          className="text-2xl md:text-3xl group transition-all duration-500 ease-in-out"
          href="mailto:hello@bramble-catering.com?subject=Bramble Catering Enquiry"
        >
          <span class="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:10%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
            hello@bramble-catering.com
          </span>
        </a>
        <ContactForm />
      </section>
    </main>
  );
}
