/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    screens: {
      mobile: { max: "767px" },
      // => @media (max-width: 767px) { ... }

      desktop: { min: "768px" },
      // => @media (min-width: 768px) { ... }

      // Breakpoints específicos
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
  },
  plugins: [],
};
