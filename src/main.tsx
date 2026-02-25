import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// Track when loading started for minimum display time
const loadStartTime = Date.now();
const MIN_LOADER_TIME = 2500; // Minimum 2.5 seconds display

// Function to hide the loader
const hideLoader = () => {
  const loader = document.getElementById("loader");
  if (loader) {
    loader.classList.add("hidden");
    // Remove loader from DOM after transition completes
    setTimeout(() => {
      loader.remove();
    }, 600);
  }
};

// Calculate when to hide loader based on minimum time
const scheduleLoaderHide = () => {
  const elapsed = Date.now() - loadStartTime;
  const remainingTime = Math.max(0, MIN_LOADER_TIME - elapsed);
  
  setTimeout(() => {
    hideLoader();
  }, remainingTime);
};

// Try to use the load event, but also have a fallback
const tryHideLoader = () => {
  // If document is already loaded, hide immediately after min time
  if (document.readyState === "complete") {
    scheduleLoaderHide();
  } else {
    // Otherwise wait for load event
    window.addEventListener("load", scheduleLoaderHide);
  }
};

// Start the process
createRoot(document.getElementById("root")!).render(<App />);

// Run after a small delay to ensure DOM is ready
setTimeout(tryHideLoader, 100);
