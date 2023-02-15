import { useState } from "react";

const GettingStartedView = () => {
  const [username, setUsername] = useState("")
  const [chatRoomId, setChatRoomId] = useState("")

  const createRoom = () => {
    let roomId = "";
    const characters =
      "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let i = 0;
    while (i < 180) {
      roomId += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
      i++;
    }
    console.log({ roomId });
  };

  return (
    <div className="w-full h-screen flex flex-1 justify-center items-center">
      <div className="flex flex-col max-w-xs">
        <div className="text-center">
          <div className="font-bold text-3xl mb-1">TempChat</div>
          <div className="mb-8">Where Your Words is Yours</div>
          <div className="mb-2">Create your username:</div>
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="eg: JohnDoe"
              className="input input-bordered w-full max-w-xs"
            />
          </div>
          <div className="divider">then</div>
          <div className="mb-2">Join a Chat Room:</div>
          <div className="form-control w-full max-w-xs">
            <input
              type="text"
              placeholder="Chat Room ID"
              className="input input-bordered w-full max-w-xs mb-2"
            />
          </div>
          <button
            className="btn btn-secondary w-full"
            onClick={() => setJoinRoom(true)}
          >
            Join Chat Room
          </button>
          <div className="max-w-xs flex-col justify-center">
            <div className="divider">or</div>
            <button className="btn btn-primary w-full" onClick={createRoom}>
              Create Chat Room
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedView;
