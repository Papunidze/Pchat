import { useEffect, useState } from "react";
import "./style.css";
interface ImagesProps {
  src: string;
  alt: string;
  styles: string;
}
const Images = ({ src, alt, styles }: ImagesProps) => {
  const [imageLoaded, setImageLoaded] = useState(false);
  useEffect(() => {
    const img = new Image();
    img.onload = () => {
      setImageLoaded(true);
    };
    img.src = src;
  }, [src]);
  return (
    <>
      {!imageLoaded ? (
        <div className={`${styles} skeleton`}></div>
      ) : (
        <img src={src} alt={alt} className={styles} />
      )}
    </>
  );
};

export default Images;
