export interface NavbarMenu {
  id: number;
  title: string;
  path?: string;
  newTab: boolean;
  subMenu?: NavbarMenu[];
};

export interface FooterMenu {
  id: number;
  title: string;
  link: string;
};

export interface FooterConfigType {
  summary: {
    logo: string;
    content: string;
  },
  links: {
    title: string;
    items: FooterMenu[];
  },
  services: {
    title: string;
    items: FooterMenu[];
  },
  contact: {
    title: string;
    info: any;
    social: any;
  }
};

export interface CarouselConfigType {
  id: number;
  title1: string;
  title2: string;
  image: string;
};

export interface CounterConfigType {
  id: number;
  icon: any;
  title: string;
  count: number;
};

export interface AboutConfigType {
  image: string;
  title: string;
  description: string;
  points: string[];
};

export interface ServiceConfigType {
  id: number;
  title: string;
  content: string;
  link: string;
  description: string;
};

export interface TeamConfigType {
  id: number;
  name: string;
  designation: string;
  description: string;
  photo: string;
  twitter: string;
  facebook: string;
  instagram: string;
  linkedin: string;
};

export interface CustomerConfigType {
  id: number;
  name: string;
  designation: string;
  avatar: string;
  comment: string;
};

export interface BlogConfigType {
  id: number;
  title: string;
  image: string;
  content: string;
  poster: string;
  date: Date;
};
