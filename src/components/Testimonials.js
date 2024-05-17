"use client";

import { useEffect, useState } from "react";

import testimonials from "../json/testimonials.json";

export default function Testimonials({ displayTag, message }) {
  const filteredTestimonials = testimonials.filter(filterArray);

  function filterArray({ tag }) {
    return tag === displayTag;
  }

  const [displayedTestimonial, setDisplayedTestimonial] = useState(
    filteredTestimonials[0]
  );
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timerId = setInterval(
      () => setIndex((i) => (i + 1) % filteredTestimonials.length),
      9000
    );
    return () => clearInterval(timerId);
  }, []);

  useEffect(() => {
    setDisplayedTestimonial(filteredTestimonials[index]);
  }, [index]);

  return (
    <section className="flex flex-col justify-center items-center h-72">
      <p className="text-2xl w-11/12 max-w-4xl mx-auto">
        {displayedTestimonial.quote}
      </p>
      <p className="italic w-11/12 max-w-4xl mx-auto mt-4">
        {displayedTestimonial.client}, {displayedTestimonial.location}.{" "}
        {displayedTestimonial.event}.
      </p>
    </section>
  );
}
