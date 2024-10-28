import { createContext } from "react";
import { SignInForm } from "@pages/content/interface/signIn";

export interface Auth {
  handleSignIn: (LoginForm: SignInForm) => void;
  handleSignOut: () => void;
}

export const AuthContext = createContext<Auth | null>(null);
