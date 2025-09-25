import { RouterProvider } from "react-router";
import { router } from "./route";
import { queryClient } from "./lib/reactQuery";
import { QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
      <ToastContainer />
    </QueryClientProvider>
  );
}

export default App;
