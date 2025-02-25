/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    screens: {
      sm: { min: "0px", max: "739px" },
      md: { min: "740px", max: "949px" },
      lg: { min: "950px", max: "1159px" },
      xl: { min: "1160px", max: "1519px" },
      "2xl": { min: "1520px", max: "1920px" },
      "3xl": "1921px",
    },
    extend: {
      colors: {
        "button-dark": "#1c1c1ce6",
        "button-grey": "#8080804d",
        "button-light": "#eaeaea99",
        "button-light-6": "#e9e9e9e6",
        "grey-light-custom": "#eaeaea48",
        "grey-light-custom2": "#eaeaea30",
        "custom-white": "#f9f9f9e6",
        "custom-grey": "#3c3c3c",
        "step-light": "#cfcfcf33",
        "accordion-light-border": "rgba(228, 228, 228, 1)",
      },
    },
  },

  plugins: [],
};
