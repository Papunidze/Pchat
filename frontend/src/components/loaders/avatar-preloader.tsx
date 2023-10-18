import { useEffect, useState } from "react";

interface AvatarProps {
  src: string;
  alt: string;
  style?: string;
}

const Avatar = ({ src, alt, style }: AvatarProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);
  return (
    <div className={`avatar ${style}`}>
      {!imageLoaded ? (
        <div className={`flex items-center max-w-[100%] max-h-[100%] ${style}`}>
          <div className="avatar bg-gray-200 min-h-12 min-w-12 animate-pulse w-full h-full" />
        </div>
      ) : (
        <img src={src} alt={alt} className={`avatar ${style}`} />
      )}
    </div>
  );
};

export default Avatar;
