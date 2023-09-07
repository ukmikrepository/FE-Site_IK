module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'mont': ['Montserrat', 'sans-serif'],
      },
    },
    container: {
      padding: {
        DEFAULT: "1.25rem",
        sm: "0.75rem",
        lg: "3rem",
        xl: "3rem",
        "2xl": "3rem",
      },
    },
  },
  plugins: [],
}