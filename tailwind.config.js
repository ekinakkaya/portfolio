module.exports = {
  theme: {
    extend: {
      keyframes: {
        "fade-in-left": {
          "0%": {
            opacity: 0,
            transform: "translate3d(-100%, 0, 0)",
          },
          "100%": {
            opacity: 1,
            transform: "translate3d(0, 0, 0)",
          },
        },
      },
      animation: {
        fadeinleft: "fade-in-left 1s ease-in-out 0.25s 1",
      },
    },
  },
  plugins: [],
};
