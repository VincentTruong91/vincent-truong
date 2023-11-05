/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        blue: "#2CBCE9",
        red: '#DC4492',
        yellow: '#FDCC49',
        grey: "#ededed",
        white: "#FFFFFF",
        green: "#6A8F62",
        brown: "#7F7E6E",
        "deep-blue": "#010026",
        "dark-gray": "#757575",
        "opaque-black": "rgba(0,0,0,0.35)"
      },
      backgroundImage: (theme) => ({
        "gradient-rainbow":
          "linear-gradient(81.66deg, #7F7E6E 7.21%, #6A8F62 45.05%, #FFBA00 78.07%)",

        "gradient-rainblue":
          "linear-gradient(90deg, #7F7E6E 4.53%, #6A8F62 69.36%, #FFFFFF 117.73%)",
      }),
      fontFamily: {
        playfair: ["Playfair Display", 'serif'],
        opensans: ["Open Sans", 'sans-serif']
      },
      content: {
        brush: "url('./assets/brush.png')",
        person1: "url('./assets/person-1.png')",
        person2: "url('./assets/person-2.png')",
        person3: "url('./assets/person-3.png')"
      },
      screens: {
        xs: "480px",
        s: "768px",
        md: "1060px"
      }
        
    },
  },
  plugins: [],
}

