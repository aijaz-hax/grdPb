import App from "@pages/content/components/app/app";
import refreshOnUpdate from "virtual:reload-on-update-in-view";
import ReactDOM from "react-dom";
import { PopupProvider } from "@pages/content/context/popup";
import { WishListProvider } from "@pages/content/context/wishList";
import { MemoryRouter as Router } from "react-router-dom";
import { AuthProvider } from "@pages/content/context/auth";
import { Suspense } from "react";
import 'react-phone-number-input/style.css'
import { CacheProvider } from "@emotion/react";
import { GoogleOAuthProvider } from '@react-oauth/google'
import createCache from "@emotion/cache";
import { ThemeProvider } from "@mui/material";
import theme from "@pages/content/theme";

refreshOnUpdate("pages/content");

const app = document.createElement("div");
app.id = "ward-robe-root";
// app.style.fontFamily = "'Montserrat', sans-serif";

// Disable main button action by default
app.style.display = "none";

const emotionRoot = document.createElement("div");
const shadowRoot = app.attachShadow({ mode: "closed" });
shadowRoot.appendChild(emotionRoot);

const cache = createCache({
  key: "mui",
  container: emotionRoot,
});

const url = window.location.href;
const keywords = [
  "product",
  "produit",
  "clothing",
  "vetement",
  "apparel",
  "fashion",
  "cart",
  "checkout",
  "shopping",
  "bag",
];

let isProductPage = false;

for (const keyword of keywords) {
  if (!url.includes("garde-robe.com") && url.includes(keyword)) {
    isProductPage = true;
    break;
  }
}

if (isProductPage) {
  app.style.display = "block";
}

document.body.appendChild(app);

chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
  if (
    request.type === "clickedBrowserAction" &&
    request.action !== "automatic"
  ) {
    if (app.style.display === "none") {
      app.style.display = "block";
    } else {
      app.style.display = "none";
    }
  }
});

// Create a shadow roo
// Render the React component into the shadow root
ReactDOM.render(
  <Router>
    <Suspense fallback={<div>Loading... </div>}>
      <PopupProvider>
        <AuthProvider>
          <WishListProvider>
            {/* <ThemeProvider theme={theme}> */}
              <CacheProvider value={cache}>
                <App />
              </CacheProvider>
            {/* </ThemeProvider> */}
          </WishListProvider>
        </AuthProvider>
      </PopupProvider>
    </Suspense>
  </Router>,
  emotionRoot
);
