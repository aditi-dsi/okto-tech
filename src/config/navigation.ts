import type { NavItem } from "@/types/navigation";

export const navigationItems: NavItem[] = [
  {
    label: "Wallet",
    href: "https://www.okto.tech/wallet",
  },
  {
    label: "Points",
    children: [
      {
        label: "Blog on Okto Points",
        href: "https://www.okto.tech/post/introduction-to-okto-points",
      },
    ],
  },
  {
    label: "Community",
    href: "#community",
  },
  {
    label: "Resources",
    children: [
      {
        label: "Documentation",
        href: "https://docs-okto.vercel.app/docs",
      },
    ],
  },
];
