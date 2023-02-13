import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root";
import GettingStartedView from "../views/GettingStartedView";
import HomeView from "../views/HomeView";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <HomeView />
      }
    ]
  },
  {
    path: "/get-started",
    element: <GettingStartedView />,
  },
]);

export default router
