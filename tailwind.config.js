export const content = [
  './pages/**/*.{html,js}',
  './components/**/*.{html,js}',
  "./src/**/*.{js,jsx,ts,tsx}",
];
export const theme = {
  colors: {
    'cyan': '#11a8c7',
    'purple': '#9c27b0',
    'pink': '#ff49db',
    'orange': '#ff7849',
    'green': '#13ce66',
    'yellow': '#ffc82c',
    'gray-dark': '#273444',
    'gray': '#e8e8e8',
    'gray-light': '#d3dce6',
    'custom': '#7386d5',
  },
  fontFamily: {
    sans: ['Graphik', 'sans-serif'],
    serif: ['Merriweather', 'serif'],
  },
  extend: {
    spacing: {
      '40': '36rem',
      'icon': '1000px',
      'iconwidth': '70px',
      
    },
    
    // borderRadius: {
    //   '4xl': '2rem',
    // }
  }
};