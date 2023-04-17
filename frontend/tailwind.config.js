module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
      extend: {
        colors: {
            primary: {
              50: '#F2F8F8',
              100: '#E6F1F1',
              200: '#C1DBDB',
              300: '#9CC5C5',
              400: '#4D9A9A',
              500: '#006F6F',
              600: '#005E5E',
              700: '#004D4D',
              800: '#003C3C',
              900: '#002B2B',
            },
            secondary: {
              50: '#F4F4F4',
              100: '#E9E9E9',
              200: '#C9C9C9',
              300: '#A9A9A9',
              400: '#696969',
              500: '#292929',
              600: '#252525',
              700: '#202020',
              800: '#1C1C1C',
              900: '#171717',
            },
            nature: {
                     50: '#FDFCF8',
                     100: '#FAF8EF',
                     200: '#F2EFD6',
                     300: '#E9E6BC',
                     400: '#D8D294',
                     500: '#C7C76B',
                     600: '#B7B78A', // New color
                     700: '#99996C',
                     800: '#7A7A4D',
                     900: '#5C5C2E',
                   },
          },
      },
    },
    variants: {},
    plugins: [],
};