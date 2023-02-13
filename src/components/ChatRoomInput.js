const ChatRoomInput = () => {
  return (
    <div>
      <div className="px-6 py-4 flex items-center gap-4 border-t-8 border-neutral-900 h-28 bg-base-100">
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full flex-1 bg-base-300"
        />
        <button className="btn btn-primary">Send</button>
      </div>
    </div>
  );
};

export default ChatRoomInput;
