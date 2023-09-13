import Images from "@/cmp-domain/images/images";
import { createAvatar } from "@/utils/avatar/create-avatar";

const ChatCard = () => {
  return (
    <div className="flex  flex-center h-[4.5rem]  w-full p-1 cursor-pointer hover:bg-gray-200 text-center rounded-xl">
      <div className="max-w-[3.5rem] h-full w-full flex-center ">
        <Images
          src={createAvatar("giga")}
          alt=""
          styles="w-full rounded-[50%]  object-fit: cover select-none"
        />
      </div>
      <div className="ps-[1rem] w-full h-full flex flex-col text-center items-start  p-2">
        <div className="flex-between w-full text-center">
          <h1 className="leading-[1.375rem] font-[500] text-[16px] whitespace-nowrap text-ellipsis overflow-hidden">
            Giga Papunidze
          </h1>
          <span>9:31</span>
        </div>
        <div className="flex mt-[0.1rem] whitespace-nowrap text-ellipsis overflow-hidden leading-[1.375rem] text-[16px]">
          <span className="font-[500]"> tedo:</span>
          <span>hello</span>
        </div>
      </div>
    </div>
  );
};

export default ChatCard;
