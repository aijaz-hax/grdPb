import { FC, ReactNode, useEffect, useState } from "react";
import { PopupContext } from "@pages/content/context/popup/popupContext";
import { parseDomain, ParseResultType } from "parse-domain";
import { ErrorAlert } from "@pages/content/interface/error";
import { delay } from "@pages/content/shared/delay";

interface PopupProviderProps {
  children: ReactNode;
}

export const PopupProvider: FC<PopupProviderProps> = ({ children }) => {
  const [popupOpen, setOpenPopup] = useState<boolean>(false);
  const [pageTitle, setPageTitle] = useState<string>("");
  const [storeName, setStoreName] = useState<string>("");
  const [error, setError] = useState<ErrorAlert>({
    message: "",
    error: false,
  });

  useEffect(() => {
    chrome.runtime.sendMessage({ type: "clickedBrowserAction" });
  }, []);

  useEffect(() => {
    const getPageTitle = async () => {
      chrome.runtime.onMessage.addListener(async (message) => {
        if (message.type == "clickedBrowserAction") {
          setPageTitle(message.title);
        }
      });
    };

    const parseResult = parseDomain(window.location.hostname);

    if (parseResult.type === ParseResultType.Listed) {
      const { domain } = parseResult;
      setStoreName(domain);
    }

    getPageTitle();
  }, []);

  const handleSetError = async (message: string) => {
    setError({ error: true, message: message });
    await delay(5000);
    setError({ error: false, message: "" });
  };

  const value = {
    popupOpen,
    setOpenPopup,
    pageTitle,
    setPageTitle,
    storeName,
    error,
    handleSetError,
    setStoreName,
  };

  return (
    <PopupContext.Provider value={value}>{children}</PopupContext.Provider>
  );
};
