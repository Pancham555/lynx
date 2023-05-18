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
        "login-pattern":
          "url('https://cdn.leonardo.ai/users/3bf5e16f-0677-4834-a7f4-f1b6ef065f57/generations/8701112d-5d06-4c5f-8df2-045ea0023c88/Leonardo_Diffusion_earth_below_several_spaceships_above_it_mar_1.jpg')",
        "work-image":
          "url('https://cdn.leonardo.ai/users/3bf5e16f-0677-4834-a7f4-f1b6ef065f57/generations/4ec970f6-b78b-47fe-b8b7-b5c21e1360f2/Default_repeated_pattern_purple_color_medium_sized_dots_of_hex_1.jpg')",
        // "blob": "url('/blob-haikei.svg')"
        // video: "./public/Video_compressed.mp4'",
      },
      colors: {
        theme: "#03C988",
        "theme-2": "#6955EA",
        "theme-light": "#c6f8cb",
      },
    },
  },
  plugins: [],
};
