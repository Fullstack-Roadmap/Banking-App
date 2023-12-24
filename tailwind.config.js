/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
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
