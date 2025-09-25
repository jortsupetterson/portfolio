import { createBrowserRouter } from "react-router-dom";
import App from "./components/App.tsx";
import Index from "./pages/Index.tsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Index />,
      },
    ],
  },
]);
