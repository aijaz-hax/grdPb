import { FC, ReactNode, useEffect } from "react";
import { AuthContext } from "@pages/content/context/auth/authContext";
import { useNavigate } from "react-router-dom";
import authStorage from "@pages/content/shared/storages/authStorage";
import {
  postWithAuth,
  postWithoutAuth,
} from "@pages/content/shared/requestHandler";
import useStorage from "@pages/content/hooks/useStorage";
import { usePopup } from "@pages/content/hooks/usePopup";
import { getUserSections } from "@pages/content/shared/getUserSections";

interface AuthProviderProps {
  children?: ReactNode;
}

export const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const { handleSetError } = usePopup();
  const navigate = useNavigate();
  const storageAuth = useStorage(authStorage);

  useEffect(() => {
    const validateToken = async () => {
      const result = await postWithAuth(
        "/validate_token",
        storageAuth.accessToken
      );

      if (!result) {
        await authStorage.setAuth({
          user: { id: null, email: null },
          accessToken: null,
        });
        navigate("/card");
      }
    };

    validateToken();
  }, []);

  const handleSignIn = async (data) => {
    const result = await postWithoutAuth("/login", data);

    if (result && result.status == "success") {
      const token = result?.response?.token;
      const email = data.email;

      const defaultSection = await getUserSections(token, email);

      await authStorage.setAuth({
        user: { id: result?.response?.user_id, email: email },
        accessToken: token,
        defaultSectionId: defaultSection?._id,
      });
      navigate("/");
    } else {
      handleSetError(
        "Invalid credential or an unexpected error has occurred. Please try again."
      );
    }
  };

  const handleSignOut = async () => {
    if(storageAuth.user.email==="gmail"){
      const googleLoginUrl = "https://app.garde-robe.com/version-81fld/logout-from-extension";
      window.open(googleLoginUrl, "_blank");
      await authStorage.setAuth({
        user: { id: null, email: null },
        accessToken: null,
      });
      navigate("/card");
      chrome.runtime.sendMessage({ type: "RELOAD_EXTENSION" });
    }else{
      const result = await postWithAuth("/logout", storageAuth.accessToken);

    if (result && result.status == "success") {
      await authStorage.setAuth({
        user: { id: null, email: null },
        accessToken: null,
      });
      navigate("/card");
    } else {
      handleSetError("An unexpected error has occurred. Please try again.");
    }

    }
    
  };

  const value = { handleSignIn, handleSignOut };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
