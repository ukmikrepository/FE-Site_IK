module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        mont: ["Montserrat", "sans-serif"],
      },
      colors: {
        "primary-1": "#1A8CE0",
        "primary-2": "#056BB7",
        "primary-3": "#00528E",
        "primary-4": "#003A65",
        "primary-5": "#35A9FF",
        "primary-6": "#59B8FF",
        "primary-7": "#7EC8FF",
        "primary-8": "#A2D7FF",
        "primary-9": "#C6E7FF",
        "primary-10": "#EBF6FF",
        "grey-1": "#333333",
        "grey-2": "#474747",
        "grey-3": "#5C5C5C",
        "grey-4": "#707070",
        "grey-5": "#858585",
        "grey-6": "#999999",
        "grey-7": "#ADADAD",
        "grey-8": "#C2C2C2",
        "grey-9": "#D6D6D6",
        "grey-10": "#EBEBEB",
      },
    },
    transitionProperty: {
      size: "width, height",
    },
    container: {
      padding: {
        DEFAULT: "1.25rem",
        sm: "0.75rem",
        lg: "5rem",
        xl: "4rem",
        "2xl": "1rem",
      },
    },
    screens: {
      'xs': '480px',
      // => @media (min-width: 640px) { ... }

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [],
};
