type TNavigation = {
  name: string;
  href: string;
  iconName: "home" | "earn" | "group" | "airDrop" | "daily";
};

export const navigation: TNavigation[] = [
  {
    name: "Home",
    iconName: "home",
    href: "/",
  },
  {
    name: "Earn",
    iconName: "earn",
    href: "/earn",
  },
  {
    name: "Referrals",
    iconName: "group",
    href: "/shares",
  },
  {
    name: "AirDrop",
    iconName: "airDrop",
    href: "/airdrop",
  },
  {
    name: "Daily",
    iconName: "daily",
    href: "/daily",
  },
];
