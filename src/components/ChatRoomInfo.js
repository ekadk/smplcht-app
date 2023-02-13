const ChatRoomInfo = () => {
  return (
    <div>
      <div className="flex flex-col gap-4 text-sm">
        <div className="card w-96 bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Chat Room ID:</h2>
            <p>b49p8uXDZiG0tkdNF2J0S6V5tK5</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Participants:</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title">Welcome to TempChat!</h2>
            <ol className="list-decimal flex flex-col gap-2">
              <li>
                This room is yours. Every message{" "}
                <strong>will be deleted everytime you leave.</strong>
              </li>
              <li>
                To leave the room, simply click{" "}
                <span className="bg-error">
                  <code>leave</code>
                </span>{" "}
                button
              </li>
              <li>To add participant, send them the link below:</li>
            </ol>
            <div className="w-full bg-neutral-900 px-4 py-2 rounded-lg">
              <code className="text-sm">Random Link</code>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatRoomInfo
