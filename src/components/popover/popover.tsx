import React, { useEffect, useRef } from "react";

interface PopoverProps {
  isOpen: boolean;
  children: React.ReactNode;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Popover: React.FC<PopoverProps> = ({ isOpen, children, setIsOpen }) => {
  const backdropRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleBackdropClick = (e: MouseEvent) => {
      if (
        backdropRef.current &&
        !backdropRef.current.contains(e.target as Node)
      ) {
        // setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener("click", handleBackdropClick);
    } else {
      window.removeEventListener("click", handleBackdropClick);
    }

    return () => {
      window.removeEventListener("click", handleBackdropClick);
    };
  }, [isOpen, setIsOpen]);
  return (
    <div
      className={`${
        isOpen ? "block" : "hidden"
      } z-50 mt-2 w-max h-auto absolute top-7 left-0 py-2 px-1 transition-all ease-in duration-300 bg-opacity-80 shadow-md backdrop-blur-md rounded-lg border border-opacity-20 bg-clear dark:bg-dark dark:border-black `}
      ref={backdropRef}
    >
      {children}
    </div>
  );
};

export default Popover;
