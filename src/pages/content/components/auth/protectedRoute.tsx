import { Navigate } from "react-router-dom";
import React from "react";
import useStorage from "@pages/content/hooks/useStorage";
import authStorage from "@pages/content/shared/storages/authStorage";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const storageAuth = useStorage(authStorage);

  console.log("SRT",storageAuth)


  if (storageAuth.accessToken) {
    return <>{children}</>;
  }
  return <Navigate to="/signIn" />;
};

export default ProtectedRoute;
