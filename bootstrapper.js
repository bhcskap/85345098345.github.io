// List of JavaScript file paths to load
const scriptFiles = [
  "vars.js",
  "render.js",
  "sha256.js",
  "game.js",
  "handlers.js",
  "events.js",
  "settings.js",
  "leaderboard.js"
];

// Function to load all the scripts sequentially
function loadScripts(files, index = 0) {
  if (index < files.length) {
      const script = document.createElement("script");
      script.src = files[index]; // Set the file source
      script.onload = () => loadScripts(files, index + 1); // Load next script after current one
      script.onerror = () => console.error(`Failed to load ${files[index]}`); // Handle errors
      document.body.appendChild(script); // Append the script to the document body
  }
}

// Start loading the scripts
loadScripts(scriptFiles);
