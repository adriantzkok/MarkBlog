"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useRouter, useParams, usePathname } from "next/navigation";
import { routing } from "@/src/i18n/routing";
import { displayCurrentLocale } from "@/lib/utils";

export function LanguageToggle({
  buttonClassName,
}: {
  buttonClassName?: string;
}) {
  // Get Current Locale
  const params = useParams<{ locale?: string }>();
  const currentLocale = params.locale || routing.defaultLocale;

  const router = useRouter();
  const pathname = usePathname(); // Get the current pathname
  const { locales } = routing;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className={buttonClassName}>
        <Button variant="outline" size="icon">
          {displayCurrentLocale(currentLocale)}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="z-100">
        {locales.map((locale) => (
          <DropdownMenuItem
            key={locale}
            onClick={() => {
              const newPathname = `/${locale}${pathname.replace(
                `/${currentLocale}`,
                ""
              )}`;
              router.push(newPathname);
            }}
          >
            {locale}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
