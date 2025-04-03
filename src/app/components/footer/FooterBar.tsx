// Footer.jsx
import React from "react";
import MaxWidthWrapper from "@/src/app/components/MaxWidthWrapper";
import { FOOTER_NAME } from "@/src/app/index/FooterIndex";

const FooterBar = () => {
  return (
    <footer className="bg-gray-300 text-black py-6 border-t-2">
      <MaxWidthWrapper className="my-0">
        <div className="mx-auto relative text-center">
          <p className="mb-2 italic">
            &copy; 2025 {FOOTER_NAME}. All rights reserved.
          </p>
        </div>
      </MaxWidthWrapper>
    </footer>
  );
};

export default FooterBar;
