/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors : {
        mainclr : '#22C55E',
        subclr : '#BBF7D0',
       
      }
    }
  },
  plugins: [
    require('daisyui')
  ]
};