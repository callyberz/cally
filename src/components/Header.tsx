import React from "react";
import Link from "next/link";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "src/components/ui/navigation-menu";
import { cn } from "src/utils";
import { Briefcase, HomeIcon, School, UserCircle2 } from "lucide-react";

interface RouteProps {
  text: string;
  linkTo: string;
  icon: React.ReactNode;
}

const Routes: RouteProps[] = [
  {
    text: "Work",
    linkTo: "/work",
    icon: <Briefcase className="md:mr-2 md:inline" />,
  },
  {
    text: "Skils",
    linkTo: "/skills",
    icon: <UserCircle2 className="md:mr-2 md:inline" />,
  },
  {
    text: "Educaiton",
    linkTo: "/education",
    icon: <School className="md:mr-2 md:inline" />,
  },
];

export function Header() {
  return (
    <NavigationMenu className="flex items-center justify-between p-4">
      <NavigationMenuList className="flex space-x-4">
        <NavigationMenuItem>
          <Link href="/" as="/" legacyBehavior passHref>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              <HomeIcon className="md:inline" />
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {Routes.map((route, index) => (
          <NavigationMenuItem key={index}>
            <Link href={route.linkTo} legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                {route.icon}
                <span className="hidden md:inline">{route.text}</span>
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
}
