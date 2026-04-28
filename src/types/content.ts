export type NavItem = { label: string; href: string };

export type ServiceItem = {
  name: string;
  desc: string;
  href: string;
  logoSrc: string;
};

export type ValueItem = {
  jp: string;
  en: string;
};

export type NewsItem = {
  date: string;
  category: string;
  title: string;
  href?: string;
};

export type IrButton = {
  label: string;
  href: string;
};

export type SocialLink = {
  label: string;
  href: string;
  iconBlack: string;
  iconWhite: string;
};
