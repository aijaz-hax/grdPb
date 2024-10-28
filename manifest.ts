import packageJson from "./package.json";

/**
 * After changing, please reload the extension at `chrome://extensions`
 */
const manifest: chrome.runtime.ManifestV3 = {
  manifest_version: 3,
  name: "Garde-Robe",
  version: packageJson.version,
  description: packageJson.description,
  permissions: ["storage", "activeTab", "tabs"],
  background: {
    service_worker: "src/pages/background/index.js",
    type: "module",
  },
  action: {},
  icons: {
    "128": "logo.png",
  },
  content_scripts: [
    {
      matches: ["http://*/*", "https://*/*", "<all_urls>"],
      js: ["src/pages/content/index.js"],
      css: ["assets/css/contentStyle<KEY>.chunk.css"],
    },
  ],
  web_accessible_resources: [
    {
      resources: [
        "assets/js/*.js",
        "assets/css/*.css",
        "assets/png/imgLogo.chunk.png",
        "assets/font/*.*",
      ],
      matches: ["*://*/*"],
    },
  ],
};

export default manifest;
