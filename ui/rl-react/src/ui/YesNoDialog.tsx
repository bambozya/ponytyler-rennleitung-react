import { createContext, useCallback, useContext, useRef, useState, type ReactNode } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";

export interface YesNoDialogOptions {
  title?: string;
  text?: string;
  optionYes?: string;
  optionNo?: string;
}

type Confirm = (options: YesNoDialogOptions) => Promise<boolean>;

const YesNoDialogContext = createContext<Confirm | null>(null);

export function YesNoDialogProvider({ children }: { children: ReactNode }) {
  const [options, setOptions] = useState<YesNoDialogOptions>({});
  const [open, setOpen] = useState(false);
  const resolveRef = useRef<((result: boolean) => void) | null>(null);

  const confirm = useCallback<Confirm>((nextOptions) => {
    resolveRef.current?.(false);
    setOptions(nextOptions);
    setOpen(true);
    return new Promise<boolean>((resolve) => {
      resolveRef.current = resolve;
    });
  }, []);

  const close = (result: boolean) => {
    setOpen(false);
    resolveRef.current?.(result);
    resolveRef.current = null;
  };

  return (
    <YesNoDialogContext.Provider value={confirm}>
      {children}
      <Dialog open={open} onClose={() => close(false)}>
        <DialogTitle>{options.title || "Yes Or No?"}</DialogTitle>
        {options.text && <DialogContent>{options.text}</DialogContent>}
        <DialogActions sx={{ justifyContent: "flex-start", px: 3, pb: 2 }}>
          <Button variant="contained" color="primary" onClick={() => close(true)}>
            {options.optionYes || "Yes"}
          </Button>
          <Button variant="contained" color="secondary" onClick={() => close(false)}>
            {options.optionNo || "No"}
          </Button>
        </DialogActions>
      </Dialog>
    </YesNoDialogContext.Provider>
  );
}

/** Returns a function that opens a yes/no dialog and resolves to the user's choice. */
export function useYesNoDialog(): Confirm {
  const confirm = useContext(YesNoDialogContext);
  if (!confirm) throw new Error("useYesNoDialog must be used inside <YesNoDialogProvider>");
  return confirm;
}
