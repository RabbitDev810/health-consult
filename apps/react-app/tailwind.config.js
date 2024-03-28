/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        main: "#3b82f6",
        light: "#eff6ff",
        dark: "#1e3a8a",
      },
    },
  },
  plugins: [],
};
