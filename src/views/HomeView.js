const HomeView = () => {
  return (
    <div className="h-screen flex justify-center gap-8 p-8">
      {/* Chat Room Info Start */}
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
                This room is yours. Every message <strong>will be deleted everytime you leave.</strong>
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
      {/* Chat Room Info End*/}

      {/* Main Section Start */}
      <div className="max-w-lg flex flex-col flex-1 items-stretch bg-base-100 rounded-2xl shadow-xl overflow-hidden">
        {/* Chat Room Header Start */}
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
        {/* Chat Room Header End */}

        {/* Chat Room Message Container Start */}
        <div className="w-full flex-1 p-4">
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
        {/* Chat Room Message Container End */}

        {/* Chat Room Input Start */}
        <div className="px-6 py-4 flex items-center gap-4 border-t-8 border-neutral-900 h-28 bg-base-100">
          <input
            type="text"
            placeholder="Type here"
            className="input input-bordered w-full flex-1 bg-base-300"
          />
          <button className="btn btn-primary">Send</button>
        </div>
        {/* Chat Room Input End */}
      </div>
      {/* Main Section End*/}
    </div>
  );
};

export default HomeView;
