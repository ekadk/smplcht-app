import ChatRoomContent from "../components/ChatRoomContent";
import ChatRoomHeader from "../components/ChatRoomHeader";
import ChatRoomInfo from "../components/ChatRoomInfo";
import ChatRoomInput from "../components/ChatRoomInput";

const HomeView = () => {
  return (
    <div className="h-screen flex justify-center gap-6 p-8">
      <ChatRoomInfo />
      <div className="max-w-lg flex flex-col flex-1 items-stretch bg-base-100 rounded-2xl shadow-xl overflow-hidden">
        <ChatRoomHeader />
        <div className="w-full flex-1 p-4">
          <ChatRoomContent />
        </div>
        <ChatRoomInput />
      </div>
    </div>
  );
};

export default HomeView;
