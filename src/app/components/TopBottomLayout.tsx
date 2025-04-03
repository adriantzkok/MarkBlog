import React from "react";
import { useTranslations } from "next-intl";

interface ITopBottomLayout {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}

export default function TopBottomLayout({
  title,
  subtitle,
  children,
}: ITopBottomLayout) {
  const t = useTranslations("HomePage");
  return (
    <div className="w-full flex flex-col">
      {/* Title and Subtitle Section */}
      <div className="flex flex-col">
        <h1 className="font-semibold text-2xl md:text-left">{t(title)}</h1>
        {subtitle && <p className="text-m">{t(subtitle)}</p>}
      </div>

      {/* Divider */}
      <hr className="my-4 border-gray-300" />

      {/* Children Section */}
      <div className="mt-9 md:mt-0 w-full overflow-x-auto">{children}</div>
    </div>
  );
}
