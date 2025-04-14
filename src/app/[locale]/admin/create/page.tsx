import MaxWidthWrapper from "@/src/app/components/MaxWidthWrapper";
import React from "react";
import PostDashboard from "@/src/app/components/admin/PostDashboard";

const page = () => {
  return (
    <MaxWidthWrapper>
      <PostDashboard></PostDashboard>
    </MaxWidthWrapper>
  );
};

export default page;
