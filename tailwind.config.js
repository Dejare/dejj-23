/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#161616",
        coal: "#1e1e1e",
        smoke: "#2a2a2a",
        paper: "#f5f2ec",
        bone: "#edeae4",
        muted: "#a39e93",
        accent: "#ff5a1f",
      },
      fontFamily: {
        head: ["Heading", "Arial Narrow", "sans-serif"],
        body: ["Body", "Helvetica Neue", "Arial", "sans-serif"],
      },
      letterSpacing: {
        display: "-0.02em",
        label: "0.14em",
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.2, 0, 0, 1)",
      },
    },
  },
  plugins: [],
};
