/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        text: {
          primary: "#848e9c",
          light: "#EAECEF",
        },
        custom: {
          yellow: "#FCD535",
        },
        dark: {
          primary: "#181A20",
          secondary: "#0B0E11",
          tertiary: "#272A2E",
        },
      },
      backgroundPosition: {
        "top-center": "top, center",
        "right-center": "right, center",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: false,
    themes: false,
    base: false,
    utils: false,
    prefix: "daisy-",
  },
  // daisyui: {
  // 	styled: false,
  // 	themes: false,
  // 	base: false,
  // 	utils: false,
  // 	// logs: true,
  // 	// rtl: false,
  // 	prefix: "daisy-",
  // },
};
