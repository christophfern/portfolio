module.exports = {
  mode: "jit",
  purge: ["./src/**/*.{js,jsx,ts,tsx}","./src/**/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
              body: ['Roboto Slab', 'sans-serif'],
              header : ['Roboto', 'sans-serif']
            },
            fontWeight: {
              body: 400,
              header: 400
            },
            textColor: {
                body: '#D6E5EF',
                header: '#60A9FF',
                accent: '#202733'
            },

      colors: {
        background: '#171B21',

        cardcolor: '#202733',
        accenta:  '#599CE8',
        accentb:  '#73B3F3',

        primary: {
          50: '#f5f9f7',
          100: '#ebf3ef',
          200: '#cde0d3',
          300: '#afcdb7',
          400: '#72a985',
          500: '#346c53',
          600: '#2f5f4a',
          700: '#274f3f',
          800: '#203f35',
          900: '#1a332b',
        },
        secondary: {
          50: '#f4f4f4',
          100: '#e9e9e9',
          200: '#c8c8c8',
          300: '#a7a7a7',
          400: '#656565',
          500: '#232323',
          600: '#202020',
          700: '#1a1a1a',
          800: '#151515',
          900: '#101010',
        },
//        accent: {
//          50: '#fef6ee',
//          100: '#fcecd7',
//          200: '#f7d1aa',
//          300: '#f3b57d',
//          400: '#ea7f29',
//          500: '#d76f30',
//          600: '#c5652c',
//          700: '#a55123',
//          800: '#83401c',
//          900: '#6c3517',
//        },
      },
    },
  },
    variants: {},
    plugins: []
};