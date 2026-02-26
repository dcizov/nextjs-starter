"use client";

import type { ComponentProps } from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export const NavMenu = (props: ComponentProps<typeof NavigationMenu>) => (
  <NavigationMenu {...props}>
    <NavigationMenuList className="data-[orientation=vertical]:-ms-2 data-[orientation=vertical]:flex-col data-[orientation=vertical]:items-start data-[orientation=vertical]:justify-start">
      <NavigationMenuItem>
        <NavigationMenuLink
          render={
            <a
              href="https://nextjs.org/docs"
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          className={navigationMenuTriggerStyle()}
        >
          Docs
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          render={
            <a
              href="https://nextjs.org/learn"
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          className={navigationMenuTriggerStyle()}
        >
          Learn
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          render={
            <a
              href="https://vercel.com/templates/next.js?framework=next.js"
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          className={navigationMenuTriggerStyle()}
        >
          Templates
        </NavigationMenuLink>
      </NavigationMenuItem>
      <NavigationMenuItem>
        <NavigationMenuLink
          render={
            <a
              href="https://github.com/vercel/next.js"
              target="_blank"
              rel="noopener noreferrer"
            />
          }
          className={navigationMenuTriggerStyle()}
        >
          GitHub
        </NavigationMenuLink>
      </NavigationMenuItem>
    </NavigationMenuList>
  </NavigationMenu>
);
