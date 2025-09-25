import { RouterProvider } from "react-router";
import { router } from "./route";
import { queryClient } from "./lib/reactQuery";
import { QueryClientProvider } from "@tanstack/react-query";


function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
