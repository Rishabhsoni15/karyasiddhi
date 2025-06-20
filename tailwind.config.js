const withMT = require("@material-tailwind/react/utils/withMT");
const flowbiteReact = require("flowbite-react/plugin/tailwindcss");

/** @type {import('tailwindcss').Config} */
module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    ".flowbite-react\\class-list.json",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        // moveBall: {
        //   "0%": { transform: "translateX(10%)" },
        //   "25%": { transform: "translateY(-20%) translateX(20vw)" },
        //   "50%": { transform: "translateX(30vw)" },
        //   "75%": { transform: "translateY(-20%) translateX(20vw)" },
        //   "100%": { transform: "translateX(10%)" },
        // },
        moveBall: {
          "0%": {
            transform: "translateY(0px) translateX(0) rotate(0deg)",
            transformOrigin: "center center",
          },
          "30%": {
            transform: "translateY(5px) translateX(15px) rotate(5deg)",
            transformOrigin: "center center",
          },
          "50%": {
                transform: "translateY(25px) translateX(45px) rotate(20deg)",
            transformOrigin: "right bottom",
          },
          "80%": {
            transform: "translateY(25px) translateX(30px) rotate(5deg)",
            transformOrigin: "left top",
          },
         
          "100%": {
            transform: "translateY(0px) translateX(0px) rotate(0deg)",
            transformOrigin: "center center",
          },
        },
        movelineBall: {
          "0%": {
            transform: "translateY(0px) translateX(0) rotate(0deg)",
            transformOrigin: "center center",
          },
          "30%": {
            transform: "translateY(10px) translateX(20px) rotate(5deg)",
            transformOrigin: "center center",
          },
          "50%": {
                transform: "translateY(30px) translateX(50px) rotate(20deg)",
            transformOrigin: "right bottom",
          },
          "80%": {
            transform: "translateY(30px) translateX(40px) rotate(5deg)",
            transformOrigin: "left top",
          },
          "100%": {
            transform: "translateY(0px) translateX(0) rotate(0deg)",
            transformOrigin: "center center",
          },
        },
        expand: {
          "0%":{
            transform: "translateX(0)",
            transformOrigin: "center",
          },
          "100%": {
            transform: "translateX(1)",
            transformOrigin: "center",
          }
        },
        contract: {
          "0%": {
            transform: "translateX(1)",
            transformOrigin: "center",
          },
          "100%": {
            transform: "translateX(0)",
            transformOrigin: "center",
          }
        },
        rippleExpand :{
  "0%": {
    transform: "scale(1)",
    opacity: "0.6",
  },
  "100%": {
    transform: "scale(2.5)",
    opacity: "0",
  }
      },
      fallFromTop :{
  "0%": {
    top: "-200px", /* Start above the viewport */
    opacity: "0", /* Invisible at the start */
  },
  "10%": {
    opacity: "1", /* Fade in quickly as it starts falling */
  },
  "90%": {
    top:" 90%", /* Near the final position */
    opacity: "1",
  },
  "100%": {
    top: "unset", /* Let the 'bottom' class take over */
    bottom: "1.5rem", /* Matches 'bottom-6' (1.5rem) */
    opacity: "1", /* Fully visible at the end */
  },
},
riseToTop :{
  

 "0%": {
    bottom: "2rem",/* Start at the final position (bottom-6) */
    opacity: "1", /* Fully visible at the start */
  },
  "10%": {
    bottom: "20%", /* Small dip down before rising */
    opacity: "1",
  },
  "80%": {
    opacity: "0",/* Start fading out as it rises */
  },
  "100%": {
    top: "-200px", /* Back to the top (matches -top-20) */
    opacity: "0", /* Completely invisible at the top */
  }
}


      },

      animation: {
        moveBall: "moveBall 5s ease-in-out infinite alternate",
        movelineBall: "movelineBall 5s linear infinite alternate ",
        expand: "expand 1s ease-forward",
        contract: "contract 1s ease-foreward ",
        ripple: "rippleExpand 2s infinite ease-out",
       fallfromtop:" fallFromTop 1s cubic-bezier(0.1, 0.7, 0.3, 1) forwards",
       risetotop:" riseToTop 1s ease-in-out forwards",
      },
      colors: {
        background: "#3f3836",
        CoBg: "#fbf0ee",
        redwala: "#ff4332",
        foocolor: "#3f3836",
        greywala: "#cac6c4",
        btext: "#3f3836",
        textg: "#74706f",
        redh:"#fff8f7",
        saying:"#ff4332",
      },
    },
  },
  plugins: [flowbiteReact],
});
