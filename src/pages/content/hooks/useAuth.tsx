import { useContext } from "react";
import { AuthContext } from "@pages/content/context/auth";

export const useAuth = () => useContext(AuthContext);
