import Images from "@/components/preloader/images";
import { createAvatar } from "@/utils/avatars/create-avatar";

const ChatCard = () => {
  return (
    <a className="flex flex-row flex-nowrap  rounded-[10px] max-h-[4.5rem] w-full h-full items-center justify-start gap-2 p-3 hover:bg-lighting-hover-color cursor-pointer  relative">
      <div className="w-[3.3rem] h-[3.3rem] flex items-center justify-center absolute left-1 select-none">
        <Images
          src={createAvatar("giga")}
          alt=""
          styles="w-full  rounded-[50%] object-fit:cover select-none"
        />
      </div>
      <div className="w-full  h-full flex-col flex ps-[3rem] whitespace-nowrap text-ellipsis overflow-hidden">
        <div className="flex flex-between">
          <h1 className="text-[16] font-[500] text-dark">Title</h1>
          <p className="text-gray-400 text-[12px]">9:30</p>
        </div>
        <span className="text-gray-400 text-[14px] ps-[0.125rem]   whitespace-nowrap text-ellipsis overflow-hidden">
          Hellowwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwwww
        </span>
      </div>
    </a>
  );
};

export default ChatCard;
