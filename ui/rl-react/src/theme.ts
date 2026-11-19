import { createTheme } from "@mui/material/styles";

/** The colours of ponytyler.de. The same values are available in CSS as --pt-* (see styles.css). */
export const colors = {
  ink: "#121212",
  black: "#090909",
  surface: "#1e1e1e",
  surfaceRaised: "#282826",
  paper: "#e9e3d3",
  pink: "#ec4899",
  mint: "#48ec9b",
  orange: "#f2853d",
  sky: "#62b6f5",
  gray: "#aaa493",
  grayBorder: "#5b594f",
} as const;

const display = '"Archivo Black", "Arial Black", sans-serif';
const mono = '"Space Mono", ui-monospace, monospace';

/** Loud heading: Archivo Black, upper case, tight. */
const shout = { fontFamily: display, fontWeight: 400, textTransform: "uppercase", letterSpacing: "-0.03em" } as const;

export const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: colors.pink, contrastText: colors.ink },
    secondary: { main: colors.mint, contrastText: colors.ink },
    error: { main: "#ff5c5c", contrastText: colors.ink },
    warning: { main: colors.orange, contrastText: colors.ink },
    info: { main: colors.sky, contrastText: colors.ink },
    success: { main: colors.mint, contrastText: colors.ink },
    background: { default: colors.black, paper: colors.surface },
    text: { primary: colors.paper, secondary: colors.gray },
    divider: colors.grayBorder,
  },
  shape: { borderRadius: 0 },
  typography: {
    fontFamily: mono,
    h1: shout,
    h2: shout,
    h3: shout,
    h4: shout,
    h5: shout,
    h6: shout,
    button: { fontFamily: mono, fontWeight: 700, textTransform: "none" },
  },
  components: {
    MuiButton: {
      defaultProps: { disableElevation: true },
      styleOverrides: {
        root: {
          borderRadius: 0,
          borderWidth: 2,
          minHeight: 44,
          lineHeight: 1.2,
          variants: [
            // Filled buttons flip to the other accent on hover, like the buttons on the website.
            { props: { variant: "contained", color: "primary" }, style: { "&:hover": { backgroundColor: colors.mint } } },
            { props: { variant: "contained", color: "secondary" }, style: { "&:hover": { backgroundColor: colors.pink } } },
            {
              props: { variant: "contained", color: "inherit" },
              style: {
                backgroundColor: "transparent",
                color: colors.paper,
                boxShadow: `inset 0 0 0 2px ${colors.paper}`,
                "&:hover": { backgroundColor: colors.paper, color: colors.ink, boxShadow: "none" },
              },
            },
            { props: { variant: "outlined" }, style: { borderWidth: 2, "&:hover": { borderWidth: 2 } } },
          ],
        },
      },
    },
    MuiIconButton: {
      styleOverrides: { root: { borderRadius: 0, color: colors.paper, "&:hover": { color: colors.mint } } },
    },
    MuiAppBar: {
      styleOverrides: { root: { backgroundColor: colors.surface, backgroundImage: "none", color: colors.paper } },
    },
    MuiPaper: { styleOverrides: { root: { backgroundImage: "none" } } },
    MuiMenu: {
      styleOverrides: { paper: { backgroundColor: colors.paper, color: colors.ink, border: `3px solid ${colors.ink}` } },
    },
    MuiMenuItem: {
      styleOverrides: {
        root: {
          ...shout,
          fontSize: "1.25rem",
          minHeight: 48,
          "&:hover, &.Mui-focusVisible": { backgroundColor: colors.pink },
          "&.active": { backgroundColor: colors.mint },
        },
      },
    },
    MuiAutocomplete: {
      styleOverrides: {
        paper: { backgroundColor: colors.surfaceRaised, border: `2px solid ${colors.paper}` },
        option: { minHeight: 44 },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: { borderWidth: 2, borderColor: colors.grayBorder },
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": { borderColor: colors.paper },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": { borderColor: colors.mint },
        },
      },
    },
    MuiInputLabel: { styleOverrides: { root: { "&.Mui-focused": { color: colors.mint } } } },
    MuiTableCell: {
      styleOverrides: {
        root: { borderBottom: `1px solid ${colors.grayBorder}`, fontSize: "0.95rem" },
        head: {
          ...shout,
          fontSize: "0.85rem",
          letterSpacing: "0.02em",
          color: colors.paper,
          borderBottom: `3px solid ${colors.paper}`,
        },
      },
    },
    MuiDialog: {
      styleOverrides: { paper: { backgroundColor: colors.paper, color: colors.ink, transform: "rotate(-1deg)" } },
    },
    MuiDialogTitle: { styleOverrides: { root: { ...shout, fontSize: "1.5rem", lineHeight: 1 } } },
    MuiLinearProgress: {
      styleOverrides: { root: { backgroundColor: colors.grayBorder }, bar: { backgroundColor: colors.mint } },
    },
    MuiBadge: { styleOverrides: { badge: { borderRadius: 0, fontWeight: 700 } } },
  },
});
