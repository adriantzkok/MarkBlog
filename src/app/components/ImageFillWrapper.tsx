import Image from "next/image";

interface IImageFillWrapper {
  className?: string;
  image_link?: string;
  onError?: () => void;
}

import React from "react";

const ImageFillWrapper = ({
  className,
  image_link,
  onError,
}: IImageFillWrapper) => {
  return (
    <Image
      src={
        image_link ||
        "https://yemolfbfuywasvhymyos.supabase.co/storage/v1/object/public/Blog/Card_Images/goran-ivos-iacpoKgpBAM-unsplash.jpg"
      }
      fill={true}
      alt="Image Cover"
      style={{ objectFit: "cover" }}
      className={className}
      priority
      onError={onError}
    />
  );
};

export default ImageFillWrapper;
