import { socialMedia } from "@/data";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="mt-auto flex w-full max-w-7xl flex-col items-center justify-between gap-4 px-5 py-10 md:flex-row">
      <p className="text-sm font-light md:text-base md:font-normal">
        Copyright Ⓒ 2025 ShawnSeek
      </p>
      <div className="flex items-center gap-6 md:gap-3">
        {socialMedia.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            className="bg-black-200 flex h-10 w-10 cursor-pointer items-center justify-center saturate-180 backdrop-blur-lg"
          >
            <Image src={item.img} alt={item.img} width={32} height={32} />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
