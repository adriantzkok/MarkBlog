import React from "react";
import MaxWidthWrapper from "@/app/components/MaxWidthWrapper";
import ImageFillWrapper from "../components/ImageFillWrapper";
import AboutSkills from "../components/about/AboutSection";

const page = () => {
  return (
    <MaxWidthWrapper>
      <div className="w-full h-96 md:flex gap-3">
        <div className="sm:w-1/2 md:w-3/4 h-full relative">
          <ImageFillWrapper
            className="w-full h-full"
            image_link={
              "https://yemolfbfuywasvhymyos.supabase.co/storage/v1/object/public/Blog/about/intro.jpeg"
            }
          />
        </div>
        <AboutSkills />
      </div>
    </MaxWidthWrapper>
  );
};

export default page;
