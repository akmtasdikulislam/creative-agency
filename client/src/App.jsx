import "@assets/styles/global.css";
import { AuthProvider } from "@contexts/AuthContext";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import router from "./Routes";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster
        position="top-right"
        toastOptions={{
          className: "!font-normal !text-sm !max-w-md !w-auto",
        }}
      />
    </AuthProvider>
  );
}

export default App;
