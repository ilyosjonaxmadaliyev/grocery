import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
    <RouterProvider router={router}></RouterProvider>
);