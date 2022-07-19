import { DefaultTheme } from "styled-components";
const fonts = {
  family: {
    base: `'Noto Sans KR', sans-serif`,
    title: `'Merriweather', serif`,
  },
  size: {
    sm: "1.4rem",
    base: "1.6rem",
    lg: "2rem",
    xl: "2.5rem",
    title: "6rem",
  },
  weight: {
    light: 100,
    normal: 400,
    bold: 700,
  },
};
export const lightTheme: DefaultTheme = {
  ...fonts,
  bgColor: "#2f3640",
  textColor: "#fff",
  accentColor: "#44bd32",
};