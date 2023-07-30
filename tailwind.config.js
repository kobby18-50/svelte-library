/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors : {
        mainclr : '#22C55E',
        subclr : '#BBF7D0',
      },

      screens : {
        sm: '270px',
        md: '768px',
        lg: '976px',
        xl: '1440px'
      },
    }
  },
  plugins: [
    require('daisyui')
  ]
};