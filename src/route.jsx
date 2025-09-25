import { createBrowserRouter } from "react-router";
import Cart from "./components/pages/Cart";
import SignUp from "./components/pages/SignUp";
import SignIn from "./components/pages/SignIn";
import { Outlet } from "react-router";



function RootLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "/", element: <SignUp /> },
      { path: "signin", element: <SignIn /> },
      { path: "cart", element: <Cart /> },
    ],
  },
]);
