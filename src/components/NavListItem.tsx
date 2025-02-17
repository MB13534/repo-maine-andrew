import { ComponentProps, ReactNode } from "react";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import Link from "next/link";

interface NavListItemProps extends ComponentProps<"a"> {
  title: string;
  href: string;
  children: ReactNode;
}

export function NavListItem({
  title,
  href,
  children,
  ...props
}: NavListItemProps) {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors
            hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm text-muted-foreground">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}
