module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        smvp: {
          max: "850px",
        },
      },
      keyframes: {
        typing: {
          "0%": {
            width: "0",
          },
          "10%": {
            width: "100%",
          },
        },
        blinkcursor: {
          "0%": {
            "border-right": "2px solid rgb(13 148 136)",
          },
          "100%": {
            "border-right": "0",
          },
        },
      },
      animation: {
        typing:
          "typing 30s steps(400, end) infinite, blinkcursor 1.5s steps(2, end) infinite",
      },
    },
  },
  plugins: [],
};
