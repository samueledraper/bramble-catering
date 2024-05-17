import Link from "next/link";

export default function Button({ link, text, color }) {
  return (
    <div className="flex max-w-4xl">
      <Link
        className={`text-${color} text-2xl group transition-all duration-500 ease-in-out`}
        href={link}
      >
        <span className="bg-left-bottom bg-gradient-to-r from-black to-black bg-[length:20%_1px] bg-no-repeat group-hover:bg-[length:100%_1px] transition-all duration-500 ease-out">
          {text}
        </span>
      </Link>
    </div>
  );
}
