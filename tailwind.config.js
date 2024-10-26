/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      orange: '#f58342',
      blue: '#528de7',
      green: '#7eac77',
      red: '#cf3b0c',
      white: '#ffffff',
      grey1: '#404040',
      grey2: '#6d6d6d',
      grey3: '#a3a3a3',
      grey4: '#dedede',
      grey5: '#f8f8f8',
    },
    // For the underlined fonts we use the TW underline class on the component itself, can't be done here
    fontSize: {
      'macroReg': ['10px', { fontWeight: '400'} ],
      'macroNav': ['10px', { fontWeight: '700'} ],
      'macro': ['11px', { fontWeight: '500'} ],
      'small': ['14px', { fontWeight: '400'} ],
      'smallBold': ['14px', { fontWeight: '700'} ],
      'regular': ['17px', { fontWeight: '500'} ],
      'regularBold': ['17px', { fontWeight: '700'} ],
      'large': ['19px', { fontWeight: '500'} ],
      'largeBold': ['19px', { fontWeight: '700'} ],
      'title3': ['22px', { fontWeight: '600'} ],
      'title2': ['23px', { fontWeight: '700'} ],
      'title1': ['26px', { fontWeight: '700'} ],
      'title0': ['42px', { fontWeight: '800'} ],
    },
    fontFamily: {
      'Lato': ['Lato', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
}

