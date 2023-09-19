import React, { useEffect, useState } from "react";
import "./image-preload.css";
import ImageLoader from "@/assets/icons/image-loadder";

interface ImagesProps {
  src: string;
  alt: string;
  styles: string;
}

const Images: React.FC<ImagesProps> = ({ src, alt, styles }: ImagesProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);

  return (
    <div className={`image-container h-full`}>
      {!imageLoaded ? (
        <div className="image-placeholder animate-pulse">
          <div className="loading-spinner">
            <ImageLoader />
          </div>
        </div>
      ) : (
        <img src={src} alt={alt} className={`${styles}`} />
      )}
    </div>
  );
};

export default Images;
