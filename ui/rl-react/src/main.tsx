import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import "@fontsource/archivo-black/400.css";
import "@fontsource/space-mono/400.css";
import "@fontsource/space-mono/700.css";
import "material-icons/iconfont/filled.css";
import "./styles.css";
import { App } from "./App";
import { theme } from "./theme";
import { SnackbarProvider } from "./ui/Snackbar";
import { YesNoDialogProvider } from "./ui/YesNoDialog";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, "") || "/"}>
        <SnackbarProvider>
          <YesNoDialogProvider>
            <App />
          </YesNoDialogProvider>
        </SnackbarProvider>
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
