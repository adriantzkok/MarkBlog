"use client";
import React from "react";
import Link from "next/link";
import { Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { routes } from "@/src/app/index/NavBarIndex";
import { useTranslations } from "next-intl";

const NavBar = () => {
  const t = useTranslations("NavBar");
  return (
    <nav className="px-16 items-center backdropblur h-24 flex sticky top-0 border-b-4 bg-background/80 bg-neutral-200 justify-between z-99">
      <Link href={"/"}>
        <h1 className="font-bold text-xl whitespace-nowrap">{`ADRIAN K | 
        ${t("blog")}`}</h1>
      </Link>
      <ul className="w-full md:justify-end items-center space-x-4 hidden md:flex">
        {routes.map((post, index: number) => (
          <Link
            href={post.route}
            key={index}
            className="transition-colors duration-300 hover:text-blue-600"
          >
            <li>{t(post.name)}</li>
          </Link>
        ))}
      </ul>
      <Sheet>
        <SheetTrigger>
          <Menu size={18} className="md:hidden" />
        </SheetTrigger>
        <SheetContent className="mt-24">
          <SheetHeader>
            <SheetTitle>{t("pages")}</SheetTitle>
          </SheetHeader>
          <div className="relative">
            <ul className="w-full items-center space-x-4 justify-center">
              {routes.map((post, index: number) => (
                <SheetTrigger asChild key={index}>
                  <Link href={post.route}>
                    <li className="text-center transition-colors duration-300 hover:text-red-500">
                      {t(post.name)}
                    </li>
                  </Link>
                </SheetTrigger>
              ))}
            </ul>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default NavBar;
