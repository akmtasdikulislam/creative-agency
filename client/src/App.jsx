import "@assets/styles/global.css";
import { AuthProvider } from "@contexts/AuthContext";
import { RouterProvider } from "react-router";
import router from "./Routes";

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
