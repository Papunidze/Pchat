import { useState } from "react";
import "./BurgerMenu.css";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`burger-menu ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
      <div className="bar"></div>
      <div className="bar"></div>
      <div className="bar"></div>
    </div>
  );
};

export default BurgerMenu;
/*
import { useState } from "react";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      className={`w-6 h-6 cursor-pointer flex flex-col justify-between ${
        isOpen ? "transform rotate-0" : "transform rotate-180"
      } transition-transform duration-300 ease-in-out`}
      onClick={toggleMenu}
    >
      <div className="w-full h-1 bg-gray-700"></div>
      <div className="w-full h-1 bg-gray-700"></div>
      <div className="w-full h-1 bg-gray-700"></div>
    </div>
  );
};

export default BurgerMenu;

*/

// import { useState } from "react";

// const BurgerMenu = () => {
//   const [isOpen, setIsopen] = useState(false);
//   return (
//     <div onClick={() => setIsopen(true)} className="w-5 h-5">
//       {!isOpen ? (
//         <svg viewBox="0 0 20 20 " className="">
//           <path
//             d="M 2 2.5 L 20 2.5"
//             fill="transparent"
//             strokeWidth="3"
//             stroke="#707579"
//             strokeLinecap="round"
//           />
//           <path
//             d="M 2 9.423 L 20 9.423"
//             fill="transparent"
//             strokeWidth="3"
//             stroke="#707579"
//             strokeLinecap="round"
//           />
//           <path
//             d="M 2 16.346 L 20 16.346"
//             fill="transparent"
//             strokeWidth="3"
//             stroke="#707579"
//             strokeLinecap="round"
//           />
//         </svg>
//       ) : (
//         <svg
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 25 25"
//           className={`transform ${
//             isOpen ? "rotate-180" : "rotate-0"
//           } transition-transform duration-150 ease-in-out`}
//         >
//           <path
//             stroke="#707579"
//             fill="#707579"
//             d="m17.5 5.999-.707.707 5.293 5.293H1v1h21.086l-5.294 5.295.707.707L24 12.499l-6.5-6.5z"
//             data-name="Right"
//           />
//         </svg>
//       )}
//     </div>
//   );
// };

// export default BurgerMenu;
