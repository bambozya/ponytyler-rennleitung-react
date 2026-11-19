import { createTheme } from "@mui/material/styles";

// Tones 40 of the palettes in the Angular app's m3-theme.scss.
export const theme = createTheme({
  palette: {
    primary: { main: "#b51167" },
    secondary: { main: "#2b6579" },
    error: { main: "#ba1a1a" },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: { root: { textTransform: "none", borderRadius: 20 } },
    },
  },
});
