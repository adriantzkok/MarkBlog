import React from "react";
import { useTranslations } from "next-intl";

const AboutSection = () => {
  const t = useTranslations("AboutPage");

  return (
    <div className="flex flex-col w-full p-6 gap-y-6">
      <h1 className="sm:text-2xl md:text-4xl font-bold mb-1">
        {t("aboutheader")}
      </h1>
      <p className="sm:text-s md:text-xl">{t("aboutcontent")}</p>
    </div>
  );
};

export default AboutSection;
