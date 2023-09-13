import LoadingSpinner from "@/utils/loading/LoadingSpinner";
import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  Icon?: string;
  isLoading?: boolean;
  submitButtonProps?: object;
}
const CustomButton = ({
  btnType,
  containerStyles,
  textStyles,
  title,
  Icon,
  submitButtonProps,
  handleClick,
  isLoading,
}: CustomButtonProps) => {
  return (
    <button
      disabled={isLoading}
      type={btnType || "button"}
      className={`custom-btn ${containerStyles} ${
        isLoading &&
        " bg-[#0000001f] text-[#00000042] shadow-none hover:bg-[#0000001f]"
      }`}
      onClick={handleClick}
      {...submitButtonProps}
    >
      {isLoading ? (
        <div className="w-7">
          <LoadingSpinner />
        </div>
      ) : (
        Icon && (
          <div className="relative w-6 h-6">
            <img src={Icon} alt="icon" className="icon" />
          </div>
        )
      )}
      <span className={`${textStyles}`}>{title}</span>
    </button>
  );
};

export default CustomButton;
