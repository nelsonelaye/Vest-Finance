/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          100: "rgba(0, 0, 0, 1)", // #0bdf87
          90: "rgba(0, 0, 0, .9)",
          80: "rgba(0, 0, 0, .8)",
          70: "rgba(0, 0, 0, .7)",
          60: "rgba(0, 0, 0, .6)",
          50: "rgba(0, 0, 0, .5)",
          40: "rgba(0, 0, 0, .4)",
          30: "rgba(0, 0, 0, .3)",
          20: "rgba(0, 0, 0, .2)",
          10: "rgba(0, 0, 0, .1)",
        },
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

        neutral: {
          100: "rgba(109, 109, 109, 1)",
          90: "rgba(109, 109, 109, .9)",
          80: "rgba(109, 109, 109, .8)",
          70: "rgba(109, 109, 109, .7)",
          60: "rgba(109, 109, 109, .6)",
          50: "rgba(109, 109, 109, .5)",
          40: "rgba(109, 109, 109, .4)",
          30: "rgba(109, 109, 109, .3)",
          20: "rgba(109, 109, 109, .2)",
          10: "rgba(109, 109, 109, .1)",
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
