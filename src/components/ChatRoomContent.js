const ChatRoomContent = () => {
  return (
    <div>
      <div className="chat chat-start">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full bg-base-300">
            <img src="https://robohash.org/C1H.png?set=set1&size=150x150" />
          </div>
        </div>
        <div className="chat-header mb-1">Other User</div>
        <div className="chat-bubble">You were the Chosen One!</div>
      </div>
      <div className="chat chat-end">
        <div className="chat-image avatar">
          <div className="w-10 rounded-full bg-base-300">
            <img src="https://robohash.org/8ZD.png?set=set1&size=150x150" />
          </div>
        </div>
        <div className="chat-header mb-1">
          <p>Username</p>
        </div>
        <div className="chat-bubble">I hate you!</div>
      </div>
    </div>
  );
};

export default ChatRoomContent;
