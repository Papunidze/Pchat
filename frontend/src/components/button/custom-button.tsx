import React, { MouseEventHandler } from "react";
import Spinner from "@/components/loaders/spinner-loading";

interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";

  Icon?: string;
  isLoading?: boolean;
  submitButtonProps?: object;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  btnType = "button",
  containerStyles = "",

  title,
  Icon,
  submitButtonProps,
  handleClick,
  isLoading = false,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isLoading}
      type={btnType}
      className={`button ${containerStyles} ${
        isLoading && "bg-opacity-50 text-opacity-50 pointer-events-none"
      }`}
      onClick={handleClick}
      {...submitButtonProps}
    >
      {isLoading ? (
        <div>
          <Spinner />
        </div>
      ) : (
        Icon && (
          <div className="relative w-6 h-6">
            <img src={Icon} alt="icon" className="icon" />
          </div>
        )
      )}
      {title}
    </button>
  );
};

export default CustomButton;
