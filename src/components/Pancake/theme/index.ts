import { AlertTheme } from "../Alert/types";
import { CardTheme } from "../Card/types";
import { PancakeToggleTheme } from "../PancakeToggle/types";
import { RadioTheme } from "../Radio/types";
import { ToggleTheme } from "../Toggle/types";
import { TooltipTheme } from "../Tooltip/types";
import { NavTheme } from "../Menu/types";
import { ModalTheme } from "../Modal/types";
import { Colors, Breakpoints, MediaQueries, Spacing, Shadows, Radii, ZIndices } from "./types";

export interface PancakeTheme {
  siteWidth: number;
  isDark: boolean;
  alert: AlertTheme;
  colors: Colors;
  card: CardTheme;
  nav: NavTheme;
  modal: ModalTheme;
  pancakeToggle: PancakeToggleTheme;
  radio: RadioTheme;
  toggle: ToggleTheme;
  tooltip: TooltipTheme;
  breakpoints: Breakpoints;
  mediaQueries: MediaQueries;
  spacing: Spacing;
  shadows: Shadows;
  radii: Radii;
  zIndices: ZIndices;
}

export { default as dark } from "./dark";
export { default as light } from "./light";

export { lightColors } from "./colors";
export { darkColors } from "./colors";
