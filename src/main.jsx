import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SnackbarProvider } from "notistack";

createRoot(document.getElementById("root")).render(
  <SnackbarProvider
    maxSnack={2}
    autoHideDuration={1000}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
  >
    <App />
  </SnackbarProvider>
);
