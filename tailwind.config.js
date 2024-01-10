/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: "#1E2640",
        secondary: "#FAFBFB",
        light: "D9D9D9",
        navSecondary: "#353C53",
        idColor: "#146EB4",
        customBlack: "1A181E",
        subtitle: "#4D4D4D",
        search: "#808080",
        searchId: "#999999",
      },
    },
  },
  plugins: [],
};
