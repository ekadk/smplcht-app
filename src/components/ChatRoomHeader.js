const ChatRoomHeader = () => {
  return (
    <div>
      <div className="px-4 pt-4 pb-3 flex items-center justify-between gap-4 border-b-8 bg-base-100 border-neutral-900">
        <div className="flex gap-4 items-center">
          <div className="avatar">
            <div className="w-12 rounded bg-base-300">
              <img src="https://robohash.org/8ZD.png?set=set1&size=150x150" />
            </div>
          </div>
          <div className="text-lg">Username</div>
        </div>
        <div>
          <button className="btn btn-md btn-error">Leave</button>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomHeader;
