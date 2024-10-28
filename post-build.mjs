import { readFile, writeFile } from 'fs/promises';

const manifestPath = './public/manifest.json'; // Update with your path
const uninstallUrl = 'https://example.com/'; // Update with your URL

async function updateManifest() {
  try {
    // Read the manifest file
    const data = await readFile(manifestPath, 'utf8');
    const manifest = JSON.parse(data);

    // Check if uninstall_url exists and add it if it doesn't
    if (!manifest.uninstall_url) {
      manifest.uninstall_url = uninstallUrl;

      // Write back to the manifest file
      await writeFile(manifestPath, JSON.stringify(manifest, null, 2));
      console.log('uninstall_url added to manifest.json');
    } else {
      console.log('uninstall_url already exists in manifest.json');
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

// Run the function
updateManifest();
