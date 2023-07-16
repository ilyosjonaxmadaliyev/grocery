import ReactDOM from 'react-dom/client'
// import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Login from "./Login.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  // <BrowserRouter>
    <RouterProvider router={router}></RouterProvider>
  // </BrowserRouter>
);