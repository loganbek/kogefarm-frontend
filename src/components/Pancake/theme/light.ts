import { DefaultTheme } from "styled-components";
import { light as lightAlert } from "../Alert/theme";
import { light as lightCard } from "../Card/theme";
import { light as lightPancakeToggle } from "../PancakeToggle/theme";
import { light as lightRadio } from "../Radio/theme";
import { light as lightToggle } from "../Toggle/theme";
import { light as lightTooltip } from "../Tooltip/theme";
import { light as lightNav } from "../Menu/theme";
import { light as lightModal } from "../Modal/theme";
import base from "./base";
import { lightColors } from "./colors";

const lightTheme: DefaultTheme = {
  ...base,
  isDark: false,
  alert: lightAlert,
  // @ts-ignore
  colors: lightColors,
  card: lightCard,
  toggle: lightToggle,
  // @ts-ignore
  nav: lightNav,
  modal: lightModal,
  pancakeToggle: lightPancakeToggle,
  radio: lightRadio,
  tooltip: lightTooltip,
};

export default lightTheme;
