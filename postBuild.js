// Import necessary modules
import { promises as fs } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Resolve __dirname in ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Path to your manifest.json file after build
const manifestPath = path.join('./public/manifest.json');

// OAuth configuration to be added
const oauthConfig = {
  "oauth2": {
    "client_id":"631494535077-sq26lepfjud2oe45d6ajhpg9evs8i447.apps.googleusercontent.com",
    "scopes": ["https://www.googleapis.com/auth/userinfo.email",
      "https://www.googleapis.com/auth/userinfo.profile"]
  },
  "permissions": [
    "identity",
    "storage",
    "activeTab",
    "tabs",
    "cookies",
  ]
};

// Function to update the manifest.json file
async function updateManifest() {
  try {
    // Read the current manifest.json file
    const data = await fs.readFile(manifestPath, 'utf8');

    // Parse the manifest JSON file
    let manifest = JSON.parse(data);

    // Merge or update the oauth2, content_security_policy, and permissions sections
    manifest.oauth2 = oauthConfig.oauth2;
    manifest.content_security_policy = oauthConfig.content_security_policy;
    manifest.permissions = Array.from(new Set([...(manifest.permissions || []), ...oauthConfig.permissions]));

    // Write the updated manifest back to the file
    await fs.writeFile(manifestPath, JSON.stringify(manifest, null, 2), 'utf8');
    console.log('manifest.json updated successfully!');
  } catch (error) {
    console.error('Error updating manifest.json:', error);
  }
}

// Call the function to update the manifest
updateManifest();
