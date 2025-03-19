import Image from "next/image";

interface IImageFillWrapper {
  className?: string;
  image_link?: string;
}

import React from "react";

const ImageFillWrapper = ({ className, image_link }: IImageFillWrapper) => {
  return (
    <Image
      src={image_link || "https://placehold.co/600x400"}
      fill={true}
      alt="Image Cover"
      style={{ objectFit: "cover" }}
      className={className}
      priority
    />
  );
};

export default ImageFillWrapper;
