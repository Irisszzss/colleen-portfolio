/** @type {import('tailwindcss').Config} */
module.exports = {
  // 1. Tell Tailwind to watch for the "dark" class on the <html> tag
  darkMode: 'class', 
  
  // 2. Point exactly to where your .jsx files are
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This covers all folders inside src
    "./components/**/*.{js,ts,jsx,tsx}", // This covers your components folder
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
      },
    },
  },
  plugins: [],
}