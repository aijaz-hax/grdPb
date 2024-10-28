import reloadOnUpdate from "virtual:reload-on-update-in-background-script";

reloadOnUpdate("pages/background");
reloadOnUpdate("pages/content/style.scss");

chrome.action.onClicked.addListener(function (_) {
  handleSendTitle("manual");
});

// Get message from React app
chrome.runtime.onMessage.addListener((message) => {
  switch (message.type) {
    case "activateImageSelection":
      sendToContentScript(message.type, message.imageIndex);
      break;
    case "activateMainImage":
      sendToContentScript(message.type, message.imageIndex);
      break;
    case "sendImageSelection":
      sendSelectedImageToPopup(
        "sendImageSelection",
        message.source,
        message.imageIndex
      );
      break;
    case "sendMainImageSelection":
      sendSelectedImageToPopup(
        "sendMainImageSelection",
        message.source,
        message.imageIndex
      );
      break;
    case "clickedBrowserAction":
      handleSendTitle("automatic");
      break;
    case "SET_USER_ID":
      handleUpdatedValue(
        message
      )

    // chrome.runtime.sendMessage({
    //   type: 'USER_DATA',
    //   data: {
    //     isSuccess: message.data.isSuccess,
    //     id: message.data.id
    //   }
    // });
      // chrome.storage.local.set(
      //   { 
      //     isOauthSuccess:message.data.isSuccess, 
      //     oauth_user_id: message.data.id 
      //   }, () => {
      //     console.log("Data saved to storage:", {
      //       isOauthSuccess: message.data.isSuccess,
      //       oauth_user_id: message.data.id
      //     });
      //     chrome.runtime.sendMessage({ type: "DATA_READY"});
      // });
      break;
    case "RELOAD_EXTENSION":
      chrome.runtime.reload();
      break;
    default:
      break;
  }
});

// Send title to content script
let activeTabId, baseTitle;
const handleSendTitle = (actionType) => {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    const activeTab = tabs[0];
    activeTabId = activeTab.id;
    baseTitle = activeTab.title;
    console.log("TABS",tabs)
    if(activeTab.url === "https://app.garde-robe.com/version-81fld/logout-from-extension"){
       setTimeout(()=>{
        chrome.tabs.remove(tabs[0].id);
       },2000)
    }     
    chrome.tabs.sendMessage(activeTab.id, {
      type: "clickedBrowserAction",
      title: activeTab.title,
      action: actionType,
    });
  });
};

const storeCookies = () => {
  chrome.cookies.getAll({ url: "https://app.garde-robe.com" }, (cookies) => {
    if (cookies.length > 0) {
      const cookieData = cookies.reduce((acc, cookie) => {
        acc[cookie.name] = cookie.value; // Store each cookie by name
        return acc;
      }, {});

      // Save cookies to chrome.storage.local
      chrome.storage.local.set({ browserCookies: cookieData }, () => {
        console.log("Cookies saved to storage:", cookieData);
      });
    } else {
      console.log("No cookies found for the specified URL.");
    }
  });
};

const handleUpdatedValue = (val)=>{
  console.log("Message received in background script:", val);
  chrome.tabs.query({}, (tabs) => {
    tabs.forEach((tab) => {
      chrome.tabs.sendMessage(tab.id, { type: "UPDATE_OAUTH_USER_ID", value:val.data});
    });
  });
  
  // sendResponse({ status: "user_id sent" });
}

// Send message to content script
const sendToContentScript = (key: string, index: number = null) => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    tabs.forEach((tab) => {
      if (tab.id) {
        chrome.tabs.sendMessage(tab.id, { type: key, index: index });
      }
    });
  });
};

// Get message from content script and send to React
const sendSelectedImageToPopup = (key: string, source: string, index) => {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    tabs.forEach((tab) => {
      if (tab.id) {
        chrome.tabs.sendMessage(tab.id, {
          type: key,
          source: source,
          imageIndex: index,
        });
      }
    });
  });
};

const updateProductTitle = (tabId) => {
  chrome.tabs.get(tabId, function (activeTab) {
    if (activeTab.title != baseTitle) {
      chrome.tabs.sendMessage(tabId, {
        type: "clickedBrowserAction",
        title: activeTab.title,
        action: "automatic",
      });
    }
  });
};

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
  if (activeTabId == tabId) {
    updateProductTitle(tabId);
  }
});

chrome.runtime.setUninstallURL("https://www.garde-robe.com/help-us-improve", function() {
  if (chrome.runtime.lastError) {
      console.error("Error setting uninstall URL:", chrome.runtime.lastError);
  }
});


// chrome.cookies.getAll(
//   { url: "https://app.garde-robe.com/version-81fld/google-signin" },
//   (cookies) => {
//     if (chrome.runtime.lastError) {
//       console.error("Error retrieving cookies:", chrome.runtime.lastError);
//     } else {
//       console.log("Cookies retrieved:", cookies);
//     }
//   }
// );

// chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
//   if (message.type === 'LOCAL_STORAGE_VALUE') {
//     chrome.storage.local.set({ yourKey: message.data });
//   }
// });
