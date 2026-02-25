import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Track when loading started for minimum display time
const loadStartTime = Date.now();
const MIN_LOADER_TIME = 2500; // Minimum 2.5 seconds display

createRoot(document.getElementById("root")!).render(<App />);

// Smart loader hiding - minimum display time + actual load completion
window.addEventListener("load", () => {
  const elapsed = Date.now() - loadStartTime;
  const remainingTime = Math.max(0, MIN_LOADER_TIME - elapsed);
  
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("hidden");
      // Remove loader from DOM after transition completes
      setTimeout(() => {
        loader.remove();
      }, 600);
    }
  }, remainingTime);
});
