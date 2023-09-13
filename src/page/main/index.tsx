import ChatCard from "@/modules/main/components/Card";
import Search from "@/modules/main/components/Search";
import chatBackground from "@/assets/chat-bg.png";
const Main = () => {
  return (
    <div className="flex w-full h-full">
      <nav className="max-w-[420px] w-full  overflow-auto">
        <div className="flex flex-col p-4 gap-3">
          <section className="search">
            <Search />
          </section>
          <hr className=" border-[1.5px] rounded-[5px] border-gray-300" />
          <section className="user-messages flex-center flex-col gap-4">
            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />

            <ChatCard />
            <ChatCard />
            <ChatCard />
            <ChatCard />
          </section>
        </div>
      </nav>
      <section className="flex-grow bg-gradient">
        <section
          className="flex-grow w-full h-full"
          style={{ backgroundImage: `url(${chatBackground})` }}
        ></section>
      </section>
    </div>
  );
};

export default Main;
