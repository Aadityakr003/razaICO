/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      maxWidth: {
        800: "800px",
      },
    },
    colors: {
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
      primary: {
        700: "#FFA703",
      },
      gray: {
        25: "#FAFAFA",
        50: "#F2F2F2",
        100: "#E6E6E6",
        200: "#CCCCCC",
        300: "#B3B3B3",
        400: "#999999",
        450: "#667085",
        500: "#666666",
        600: "#4D4D4D",
        700: "#333333",
        800: "#252525",
        900: "#0D0D0D",
        1000: "#1C1C1C",
      },
    },
    backgroundImage: {
      primaryGradient: `linear-gradient(102.7deg, #D78B33 0%, #FB9228 50.6%, #FFA703 100.15%)`,
      imageOverly: `linear-gradient(180deg, rgba(13, 13, 13, 0) 0%, #0D0D0D 100%)`,
      imageOverlySplit: `linear-gradient(0deg, rgba(13, 13, 13, 0) 0%, #0D0D0D 100%)`,
      buildSection: `linear-gradient(180deg, rgba(242, 242, 242, 0) -4.59%, rgba(242, 242, 242, 0.5) 109.57%), url("../../public/images/5584415 1.jpg")`,
      // technologySection: `linear-gradient(180deg, #0D0D0D, rgb(13 13 13 / 85%), #0D0D0D), url("../../public/images/2781013183 2.png")`,
      technologyCard: `linear-gradient(#333333, #333333)`,
      technologyCardContent: `radial-gradient(61.46% 49.06% at 50% -30.56%, #FFA703 0%, rgba(255, 167, 3, 0) 100%)`,
    },
    boxShadow: {
      100: "0px 132px 53px rgba(64, 64, 64, 0.01), 0px 74px 44px rgba(64, 64, 64, 0.04), 0px 33px 33px rgba(64, 64, 64, 0.07), 0px 8px 18px rgba(64, 64, 64, 0.08), 0px 0px 0px rgba(64, 64, 64, 0.08)",
      200: "0px 1px 2px rgba(16, 24, 40, 0.05)",
      300: "-67px 0px 27px rgba(0, 0, 0, 0.01), -37px 0px 22px rgba(0, 0, 0, 0.05), -17px 0px 17px rgba(0, 0, 0, 0.09), -4px 0px 9px rgba(0, 0, 0, 0.1), 0px 0px 0px rgba(0, 0, 0, 0.1)",
    },
    screens: {
      sm: "500px",
      md: "768px",
      lg: "1020px",
      xl: "1216px",
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        md: 0,
      },
    },
    fontFamily: {
      quicksand: ["'Quicksand'", "sans-serif"],
      manrope: ["'Manrope'", "sans-serif"],
      mulish: ["'Mulish'", "sans-serif"],
      "source-sans-pro": ["'Source Sans Pro'", "sans-serif"],
    },
    fontSize: {
      sm: ["12px", {lineHeight: "21px", letterSpacing: "0.1em"}],
      md: ["14px", {lineHeight: "21px", letterSpacing: "0.05em"}],
      base: ["16px", {lineHeight: "28px", letterSpacing: "0em"}],
      lg: ["18px", {lineHeight: "32px", letterSpacing: "0em"}],
      xl: ["20px", {lineHeight: "35px", letterSpacing: "0em"}],
      "2xl": ["24px", {lineHeight: "30px", letterSpacing: "0.2em"}],
      "3xl": ["32px", {lineHeight: "40px", letterSpacing: "0em"}],
      "4xl": ["36px", {lineHeight: "43px", letterSpacing: "0em"}],
      "5xl": ["44px", {lineHeight: "53px", letterSpacing: "0em"}],
      "6xl": ["64px", {lineHeight: "64px", letterSpacing: "-0.02em"}],
      "7xl": ["80px", {lineHeight: "80px", letterSpacing: "-0.02em"}],
    },
  },
  plugins: [],
};
