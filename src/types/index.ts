// 菜单子项类型
type MenuChild = {
  title: string;
  link: string;
  img?: string;
  desc?: string;
};

// 顶部菜单类型
export type MenuItemType = {
  title: string;
  link?: string;
  children?: MenuChild[];
};

export type HeroInfo = {
  title: string;
  subtitle: string;
  description: string;
};

export type GridItem = {
  id: number;
  title: string;
  description: string;
  className: string;
  imgClassName: string;
  titleClassName: string;
  img: string;
  spareImg: string;
};

export type StackItems = {
  firstCol: string[];
  secondCol: string[];
};

export type Project = {
  id: number;
  title: string;
  des: string;
  img: string;
  iconLists: string[];
  link: string;
};

export type WorkExperience = {
  id: number;
  title: string;
  desc: string;
  className: string;
  thumbnail: string;
};

export type SocialMedia = {
  id: number;
  img: string;
};
