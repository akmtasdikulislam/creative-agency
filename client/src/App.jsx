import "@assets/styles/global.css";
import ModalController from "@components/common/ModalController/ModalController";
import { AuthProvider } from "@contexts/AuthContext";
import { ModalContextProvider } from "@contexts/ModalContext ";
import { Toaster } from "react-hot-toast";
import { RouterProvider } from "react-router";
import router from "./Routes";

function App() {
  return (
    <AuthProvider>
      <ModalContextProvider>
        <RouterProvider router={router} />
        <Toaster
          position="top-right"
          toastOptions={{
            className: "!font-normal !text-sm !max-w-md !w-auto",
          }}
        />
        <ModalController />
      </ModalContextProvider>
    </AuthProvider>
  );
}

export default App;
