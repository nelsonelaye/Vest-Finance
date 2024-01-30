/** @type {import('tailwindcss').Config} */
module.exports = {
  plugins: [require("daisyui")],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: {
          100: "rgba(11, 223, 135, 1)", // #0bdf87
          90: "rgba(11, 223, 135, .9)",
          80: "rgba(11, 223, 135, .8)",
          70: "rgba(11, 223, 135, .7)",
          60: "rgba(11, 223, 135, .6)",
          50: "rgba(11, 223, 135, .5)",
          40: "rgba(11, 223, 135, .4)",
          30: "rgba(11, 223, 135, .3)",
          20: "rgba(11, 223, 135, .2)",
          10: "rgba(11, 223, 135, .1)",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
};
