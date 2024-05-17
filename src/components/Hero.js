import Image from "next/image";

export default function Hero({ image, alt, text }) {
  return (
    <section>
      <div className="h-screen">
        <Image
          quality={100}
          src={image}
          alt={alt}
          fill
          style={{
            objectFit: "cover",
          }}
        />
      </div>
      <div className="absolute bottom-0 w-screen bg-gradient-to-t from-black text-white ">
        <div className="w-full pb-8 pt-32">
          <div className="w-11/12 mx-auto mb-4 md:mb-8 text-4xl sm:text-5xl md:text-6xl">
            <h2 className="my-1 md:my-4">{`${text}`}</h2>
            <hr className="border my-4 md:my-8 border-white" />
          </div>
        </div>
      </div>
    </section>
  );
}
