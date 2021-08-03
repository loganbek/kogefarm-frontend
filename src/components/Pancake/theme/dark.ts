import { DefaultTheme } from "styled-components";
import { dark as darkAlert } from "../Alert/theme";
import { dark as darkCard } from "../Card/theme";
import { dark as darkPancakeToggle } from "../PancakeToggle/theme";
import { dark as darkRadio } from "../Radio/theme";
import { dark as darkToggle } from "../Toggle/theme";
import { dark as darkNav } from "../Menu/theme";
import { dark as darkModal } from "../Modal/theme";
import { dark as darkTooltip } from "../Tooltip/theme";
import base from "./base";
import { darkColors } from "./colors";

const darkTheme: DefaultTheme = {
  ...base,
  isDark: true,
  alert: darkAlert,
  // @ts-ignore
  colors: darkColors,
  card: darkCard,
  toggle: darkToggle,
  // @ts-ignore
  nav: darkNav,
  modal: darkModal,
  pancakeToggle: darkPancakeToggle,
  radio: darkRadio,
  tooltip: darkTooltip,
};

export default darkTheme;
