const GettingStartedView = () => {
  return (
    <div className="w-full h-screen flex flex-1 justify-center items-center">
      <div className="flex flex-col max-w-xs">
        <div className="text-center">
          <div className="font-bold text-3xl mb-1">TempChat</div>
          <div className="mb-8">Where Your Words is Yours</div>
          <div className="max-w-xs flex-col justify-center">
            <button className="btn btn-primary w-full">Create Chat Room</button>
            <div className="divider">or</div>
            <button className="btn btn-secondary w-full">Join Chat Room</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GettingStartedView;
