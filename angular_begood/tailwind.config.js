/** @type {import('tailwindcss').Config} */
module.exports = {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#b89a52",

          secondary: "#79151d",

          accent: "#1dcdbc",

          neutral: "#ede4d5",

          "base-100": "#ffffff",

          info: "#3abff8",

          success: "#36d399",

          warning: "#fbbd23",

          error: "#f87272",
        },
      },
    ],
  },
  content: ["./src/**/*.{html,ts}"],
  theme: {
    colors: {
      "begood-gold": "#b89a52",
      "begood-gold-light": "#ede4d5",
      "begood-red-dark": "#79151d",
    },
  },
  plugins: [require("daisyui")],
};
