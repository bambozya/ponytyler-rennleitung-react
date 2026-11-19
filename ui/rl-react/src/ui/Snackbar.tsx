import { createContext, useCallback, useContext, useMemo, useRef, useState, type ReactNode } from "react";
import Button from "@mui/material/Button";
import MuiSnackbar, { type SnackbarCloseReason } from "@mui/material/Snackbar";
import SnackbarContent from "@mui/material/SnackbarContent";

type Variant = "default" | "success" | "error";

export interface SnackbarOptions {
  variant?: Variant;
  /** Milliseconds until the snackbar closes on its own. */
  duration?: number;
}

export interface SnackbarApi {
  /** Shows a message; the promise resolves once the snackbar is gone. */
  open: (message: string, options?: SnackbarOptions) => Promise<void>;
  success: (message: string, duration?: number) => Promise<void>;
  error: (message: string, cause?: unknown, duration?: number) => Promise<void>;
}

interface SnackbarItem {
  key: number;
  message: string;
  variant: Variant;
  duration: number;
}

const colors: Record<Variant, { background?: string; action: string; actionBackground?: string }> = {
  default: { action: "#ffb0ca" },
  success: { background: "#056905", action: "#fff", actionBackground: "#053d05" },
  error: { background: "#a00000", action: "#fff", actionBackground: "#4f0606" },
};

const SnackbarContext = createContext<SnackbarApi | null>(null);

export function SnackbarProvider({ children }: { children: ReactNode }) {
  const [item, setItem] = useState<SnackbarItem | null>(null);
  const resolveRef = useRef<(() => void) | null>(null);
  const keyRef = useRef(0);

  const settle = useCallback(() => {
    resolveRef.current?.();
    resolveRef.current = null;
  }, []);

  const api = useMemo<SnackbarApi>(() => {
    const open = (message: string, options: SnackbarOptions = {}) =>
      new Promise<void>((resolve) => {
        settle(); // a new message replaces the one on screen
        resolveRef.current = resolve;
        keyRef.current += 1;
        setItem({
          key: keyRef.current,
          message,
          variant: options.variant ?? "default",
          duration: options.duration ?? 2000,
        });
      });
    return {
      open,
      success: (message, duration = 250) => open(message, { variant: "success", duration }),
      error: (message, cause, duration = 10000) =>
        open(cause === undefined ? message : `${message}: ${JSON.stringify(cause)}`, {
          variant: "error",
          duration,
        }),
    };
  }, [settle]);

  const close = (_event?: unknown, reason?: SnackbarCloseReason) => {
    if (reason === "clickaway") return;
    setItem(null);
    settle();
  };

  const color = colors[item?.variant ?? "default"];

  return (
    <SnackbarContext.Provider value={api}>
      {children}
      {item && (
        <MuiSnackbar
          key={item.key}
          open
          autoHideDuration={item.duration}
          onClose={close}
          anchorOrigin={{ vertical: "top", horizontal: "center" }}
        >
          <SnackbarContent
            message={item.message}
            sx={{ backgroundColor: color.background }}
            action={
              <Button
                size="small"
                onClick={() => close()}
                sx={{ color: color.action, backgroundColor: color.actionBackground }}
              >
                OK
              </Button>
            }
          />
        </MuiSnackbar>
      )}
    </SnackbarContext.Provider>
  );
}

export function useSnackbar(): SnackbarApi {
  const api = useContext(SnackbarContext);
  if (!api) throw new Error("useSnackbar must be used inside <SnackbarProvider>");
  return api;
}
