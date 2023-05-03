import { Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/login";
import { RegisterPage } from "../pages/RegisterPage";
import { DashboardPage } from "../pages/DashboardPage";
import { LinkProvider } from "../Providers/LinkContext";
import { ProtectedRoutes } from "../ProtectRoutes";

export const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      
      
      <Route path="/home" element={<ProtectedRoutes />}>
        <Route
          index
          element={
            <LinkProvider>
              <DashboardPage />
            </LinkProvider>
          }
        />
      </Route>
    </Routes>
  );
};
