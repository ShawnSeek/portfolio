"use client";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "@/components/ui/NavbarMenu";
import { MenuInfo } from "@/data";
import { useState } from "react";

const Header = () => {
  const [active, setActive] = useState<string | null>(null);
  return (
    <Menu setActive={setActive}>
      {MenuInfo.map((item, index) => (
        <MenuItem
          key={index}
          setActive={setActive}
          active={active}
          item={item.title}
          link={item.link}
        >
          {item.children &&
            item.children.map((child, idx) =>
              child.img ? (
                <ProductItem
                  key={idx}
                  title={child.title}
                  src={child.img}
                  description={child.desc as string}
                  href={child.link}
                />
              ) : (
                <HoveredLink key={idx} href={child.link}>
                  {child.title}
                </HoveredLink>
              ),
            )}
        </MenuItem>
      ))}
    </Menu>
  );
};

export default Header;
