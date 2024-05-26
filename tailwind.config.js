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
        violett: "#280386",
        team: "#101217",
      },
      container: {
        center: true,
        padding: "10px",
        screens: {
          sm: "676px",
          md: "868px",
          lg: "1092px",
          xl: "1300px",
          "2xl": "1400px",
        },
      },
    },
  },
  plugins: [],
};
