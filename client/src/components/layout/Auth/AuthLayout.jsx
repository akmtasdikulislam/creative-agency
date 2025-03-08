import { Outlet } from "react-router";

const AuthLayout = () => {
  return (
    <main className="max-w-screen relative flex min-h-screen items-center justify-center bg-gray-100">
      <Outlet />
    </main>
  );
};

export default AuthLayout;
