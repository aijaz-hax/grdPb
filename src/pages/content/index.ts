/**
 * @description
 * Chrome extensions don't support modules in content scripts.
 */
import("./components/app");
import { getMainImage } from "@pages/content/shared/imageSelection/getMainImage";
import { createOverLay } from "@pages/content/shared/imageSelection/createOverlay";

chrome.runtime.onMessage.addListener((message) => {
  switch (message.type) {
    case "activateImageSelection":
      createOverLay(message.index);
      break;
    case "activateMainImage":
      getMainImage(message.index);
      break;
    default:
      break;
  }
});

// contentScript.js
// const storedValue = localStorage.getItem('oauth_user_id');
// console.log("ST",storedValue)

// // Send the value to the background script
// chrome.runtime.sendMessage({ type: 'LOCAL_STORAGE_VALUE', data: storedValue });

// const isOauth = localStorage.getItem('oauth_successful');
// const oauthUserID = localStorage.getItem('oauth_user_id');

// console.log("kk",oauthUserID)

// if (isOauth) {
//   console.log("JJ",oauthUserID)
//   // Send the value to the background script
//   chrome.runtime.sendMessage(
//     { 
//      type: 'SET_USER_ID',
//      data:{
//        isSuccess:isOauth,
//        id:oauthUserID
//      }
//     }
//   );
// }

window.onload = () => {
  const oauthUserId = localStorage.getItem('oauth_user_id');

  if (oauthUserId) {
    console.log("oauth_user_id from local storage:", oauthUserId);
    // You can now proceed with your logic
  } else {
    console.log("oauth_user_id not found in local storage.");
  }
};

// Alternatively, if you're navigating to a URL that updates local storage,
// you can set up a Mutation Observer to detect changes in the local storage.
const observer = new MutationObserver(() => {
  const isOauth = localStorage.getItem('oauth_successful');
  const oauthUserId = localStorage.getItem('oauth_user_id');
  if (oauthUserId) {
    console.log("oauth_user_id updated:", oauthUserId);
    chrome.runtime.sendMessage(
      { 
       type: 'SET_USER_ID',
       data:{
         isSuccess:isOauth,
         id:oauthUserId
       }
      }
    );
    // You can respond to the updated local storage value
  }
});

// Observe the document for changes (you can adjust the options as needed)
observer.observe(document, { childList: true, subtree: true });

// chrome.runtime.sendMessage({ type: "STORE_COOKIES" }, (response) => {
//   console.log("Request to store cookies sent.");
// });

