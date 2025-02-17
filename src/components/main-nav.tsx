"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { ThemeToggle } from "@/components/theme-toggle";
import { DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { VisuallyHidden } from "@radix-ui/react-visually-hidden";
import { navSections } from "@/config/nav";
import { useState } from "react";
import { NavListItem } from "@/components/NavListItem";

export function MainNav() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 sm:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <span className="text-xl font-bold">RepoMaine</span>
        </Link>

        {/* Desktop Navigation */}
        <NavigationMenu className="hidden md:flex items-center">
          <NavigationMenuList>
            {navSections.map((section) => (
              <NavigationMenuItem key={section.label}>
                <NavigationMenuTrigger
                  className={navigationMenuTriggerStyle()}
                  onClick={() => router.push(section.items[0].href)}
                >
                  {section.label}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul
                    className="
                      grid gap-3 p-4
                      md:w-[500px]
                      md:grid-cols-2
                      items-start
                    "
                  >
                    {section.items.map((item) => (
                      <NavListItem
                        key={item.href}
                        title={item.title}
                        href={item.href}
                      >
                        {item.description}
                      </NavListItem>
                    ))}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

        {/* Right Section: Theme Toggle & Mobile Drawer */}
        <div className="flex items-center gap-4">
          <ThemeToggle />

          {/* Mobile Menu Trigger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden -mr-2">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle Menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="p-4">
              <DialogTitle asChild>
                <VisuallyHidden>Mobile Navigation Menu</VisuallyHidden>
              </DialogTitle>
              <DialogDescription asChild>
                <VisuallyHidden>
                  Use this menu to navigate the site
                </VisuallyHidden>
              </DialogDescription>
              <div className="flex flex-col gap-6 pt-8">
                {/* On mobile, flatten the navigation */}
                {navSections.map((section) => (
                  <div key={section.label} className="flex flex-col gap-2">
                    <span className="font-bold">{section.label}</span>
                    {section.items.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className="text-muted-foreground pl-4 text-sm"
                      >
                        {item.title}
                      </Link>
                    ))}
                  </div>
                ))}
                <Link href={"#contact"} onClick={() => setMobileOpen(false)}>
                  <Button
                    size="lg"
                    className="w-full shadow-lg bg-primary hover:bg-primary/90 gap-2"
                  >
                    Request Repossession
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
