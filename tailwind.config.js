/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      animation: {
        "pulse-slow": "pulse 3s linear infinite",
      },
      colors: {
        primary: "#FFC700",
        dark: "#0E1014",
        violet: "#825EEE",
        secondary: "#C9C9C9",
        team: "#101217",
      },
      container: {
        center: true,
        padding: "15px",
        screens: {
          sm: "576px",
          md: "768px",
          lg: "992px",
          xl: "1200px",
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
};
