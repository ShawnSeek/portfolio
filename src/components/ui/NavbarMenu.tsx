"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  link,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  link?: string;
  children?: React.ReactNode;
}) => {
  const pathname = usePathname();
  const isActive = link && pathname === link;

  // 没有children时，直接渲染Link，且根据当前路径高亮
  if (!children) {
    return (
      <Link
        href={link || "#"}
        className={`cursor-pointer rounded-full px-4 py-2 transition-colors ${
          isActive
            ? "bg-purple-500 text-white"
            : "text-white hover:bg-purple-300 hover:text-purple-500"
        }`}
      >
        {item}
      </Link>
    );
  }

  // 有children时，保持原有下拉交互
  return (
    <div className="relative inline-block" onMouseEnter={() => setActive(item)}>
      <motion.p
        transition={{ duration: 0.3 }}
        className={`cursor-pointer rounded-full px-4 py-2 transition-colors ${
          isActive
            ? "bg-purple-500 text-white"
            : "text-white hover:bg-purple-300 hover:text-purple-500"
        }`}
      >
        {item}
      </motion.p>
      {active === item && (
        <div className="absolute top-full left-1/2 z-10 -translate-x-1/2 pt-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={transition}
            layoutId="active"
            className="overflow-hidden rounded-xl border border-purple-100 bg-[#010318] shadow-xl backdrop-blur-sm"
          >
            <motion.div layout className="h-full w-max p-4">
              {children}
            </motion.div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      onMouseLeave={() => setActive(null)}
      className={`fixed top-0 left-0 z-9999 flex h-20 w-full items-center justify-center space-x-4 rounded-none border-none transition-colors duration-300 ${
        scrolled ? "backdrop-blur-md" : "bg-transparent"
      }`}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="mb-1 text-xl font-bold text-black dark:text-white">
          {title}
        </h4>
        <p className="max-w-[10rem] text-sm text-neutral-700 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link
      {...rest}
      className="rounded-lg p-2 hover:bg-purple-300 hover:text-purple-500"
    >
      {children}
    </Link>
  );
};
