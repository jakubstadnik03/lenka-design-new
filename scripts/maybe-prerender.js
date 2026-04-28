/* eslint-disable */
// Spustí react-snap pouze pokud je nastavena env proměnná PRERENDER=true.
// Důvod: react-snap používá Puppeteer (Chromium), který nemusí být dostupný
// v každém deploy prostředí. Lokálně si přerender ověříme, na Vercel se
// dá zapnout přes Environment Variable PRERENDER=true v Project Settings.
const { execSync } = require("child_process");

if (process.env.PRERENDER !== "true") {
  console.log("⏭  Prerender vypnut (set PRERENDER=true pro zapnutí). Skipping.");
  process.exit(0);
}

try {
  console.log("▶ Spouštím react-snap…");
  execSync("npx react-snap", { stdio: "inherit" });
} catch (e) {
  console.error("✗ react-snap selhal:", e.message);
  // Nezpůsobit pád deploye — spadlý prerender ≠ spadlý web
  process.exit(0);
}
