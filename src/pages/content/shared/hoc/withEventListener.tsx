import React, { useEffect } from "react";
import { setStateWithPrev } from "@pages/content/shared/setStateWithPrev";
import { useWishList } from "@pages/content/hooks/useWishList";
import { usePopup } from "@pages/content/hooks/usePopup";
import getUrls from "get-urls";
interface WithEventListenerProps {
  children: React.ReactNode;
}

const WithImageSelectorListener: React.FC<WithEventListenerProps> = ({
  children,
}) => {
  const { pageTitle } = usePopup();
  const { activeSelection, setActiveSelection } = useWishList();

  useEffect(() => {
    chrome.runtime.sendMessage({ type: "activateMainImage", imageIndex: 0 });
  }, [pageTitle]);

  useEffect(() => {
    const handleMessage = async (message: any) => {
      if (
        message.type === "sendMainImageSelection" ||
        message.type === "sendImageSelection"
      ) {
        const images = activeSelection.images;

        const index = message.imageIndex;

        if (message.source) {
          let url = message.source;

          const setOfUrls = getUrls(message.source, {
            exclude: [
              "optimized-rlmedia",
              "lp.cosstores.com",
              "lp.stories.com",
            ],
          });

          if (setOfUrls.size > 0) {
            url = [...setOfUrls][0];
          }

          const existingIndex = images.findIndex(
            (item) => item.index === index
          );

          if (existingIndex !== -1) {
            images[existingIndex] = { index, source: url };
          } else {
            images.splice(index, 0, { index, source: url });
          }
        }

        await setStateWithPrev(setActiveSelection, {
          images: images,
        });
      }
    };

    chrome.runtime.onMessage.addListener(handleMessage);

    return () => {
      chrome.runtime.onMessage.removeListener(handleMessage);
    };
  }, [activeSelection.images]);

  return <>{children}</>;
};

export default WithImageSelectorListener;
