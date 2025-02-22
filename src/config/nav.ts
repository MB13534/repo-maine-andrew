export interface NavItem {
  title: string;
  href: string;
  description: string;
}

export interface NavSection {
  label: string;
  items: NavItem[];
}

export const navSections: NavSection[] = [
  {
    label: "About",
    items: [
      {
        title: "About Us",
        href: "#about",
        description: "Learn who we are and what makes us different.",
      },
      {
        title: "Why RepoMaine",
        href: "#why-repomaine",
        description: "Discover our mission and core values.",
      },
      {
        title: "Our Process",
        href: "#process",
        description: "Understand how our 4-step process works.",
      },
    ],
  },
  {
    label: "Services",
    items: [
      {
        title: "Our Services",
        href: "#services",
        description: "Explore the various repossession services we offer.",
      },
      {
        title: "Service Areas",
        href: "#service-areas",
        description: "Check which regions we cover in Maine.",
      },
      // {
      //   title: "Partnership Services",
      //   href: "#partnership-services",
      //   description: "Learn about partnerships for lenders and institutions.",
      // },
    ],
  },
  {
    label: "Legal",
    items: [
      {
        title: "Licensing & Compliance",
        href: "#licensing",
        description:
          "Our credentials and adherence to Maine repossession laws.",
      },
      {
        title: "FAQ",
        href: "#licensing-faq",
        description: "Answers to common repossession questions.",
      },
    ],
  },
  {
    label: "Contact",
    items: [
      {
        title: "Contact Us",
        href: "#contact",
        description: "Get in touch via our form or phone number.",
      },
      // {
      //   title: "Emergency Services",
      //   href: "#emergency",
      //   description: "24/7 immediate support for urgent repossessions.",
      // },
    ],
  },
];
