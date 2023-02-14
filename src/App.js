import { RouterProvider } from "react-router";
import router from "./routes";

const App = ({cable}) => {
  return (
    <div className="bg-neutral-900 min-h-screen w-full">
      <RouterProvider router={router} cable={cable} />
    </div>
  );
};
export default App;
