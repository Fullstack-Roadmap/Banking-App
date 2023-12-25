/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: "360px",
      // => @media (min-width: 360px) { ... }

      md: "800px",
      // => @media (min-width: 800px) { ... }

      lg: "1440px",
      // => @media (min-width: 1440px) { ... }
    },
    
    fontFamily: {
      Poppins: "Poppins",
    },
    extend: {
      colors: {
        // These are the colors used in the design file
        "my-dark-green": "#1A1E1C",
        "my-gray": "#ADB2B1",
        "my-bright-green": "#2BB32A",
        "my-mid-tone-green": "#3D544D",
      },
    },
  },
  plugins: [],
};
