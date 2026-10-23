/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0A0A09",
        coal: "#131311",
        smoke: "#1D1D1A",
        paper: "#EAE6DC",
        bone: "#EAE6DC",
        muted: "#A39B8A",
        accent: "#FF4D00",
      },
      fontFamily: {
        head: ["Heading", "Arial Narrow", "sans-serif"],
        body: ["Body", "Helvetica Neue", "Arial", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.03em",
        label: "0.14em",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.22, 1, 0.36, 1)",
        expo: "cubic-bezier(0.77, 0, 0.175, 1)",
      },
    },
  },
  plugins: [],
};
