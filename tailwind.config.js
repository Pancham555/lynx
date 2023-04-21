/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "pattern-1": "url('https://wallpaperaccess.com/full/1741710.jpg')",
        // "work-image": "url('')"
        // "blob": "url('/blob-haikei.svg')"
      },
      colors: {
        "theme": "#03C988",
        "theme-2": "#6955EA",
        "theme-light": "#c6f8cb"
      },
    },
  },
  plugins: [],
}