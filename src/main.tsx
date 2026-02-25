import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

createRoot(document.getElementById("root")!).render(<App />);

// Hide the loader after 3 seconds
window.addEventListener("load", () => {
  setTimeout(() => {
    const loader = document.getElementById("loader");
    if (loader) {
      loader.classList.add("hidden");
      // Remove loader from DOM after transition
      setTimeout(() => {
        loader.remove();
      }, 500);
    }
  }, 3000);
});
