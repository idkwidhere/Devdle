/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      keyframes:{
        'reveal-wrong':{
          '0%': { transform: 'rotateX(0)' },
    
          '45%':{ transform: 'rotateX(90deg)' },
    
          '55%': { transform: 'rotateX(90deg)' },
          '55%': { background: '#7d827d' },
    
          '100%': { transform: 'rotateX(360)' },
          '100%': { background: '#7d827d' },
        },

        'reveal-close':{
          '0%': { transform: 'rotateX(0)' },
          '0%':{ background: '#fff' },
    
          '45%':{ transform: 'rotateX(90deg)' },
    
          '55%': { transform: 'rotateX(90deg)' },
          '55%': { background: '#fccf03' },
    
          '100%': { transform: 'rotateX(360)' },
          '100%': { background: '#fccf03' },
        },

        'reveal-correct':{
          '0%': { transform: 'rotateX(0)' },
          '0%':{ background: '#fff' },

          '45%':{ transform: 'rotateX(90deg)' },

          '55%': { transform: 'rotateX(90deg)' },
          '55%': { background: '#19b319' },

          '100%': { transform: 'rotateX(360)' },
          '100%': { background: '#19b319' },
        }
      },

      animation: {
        'reveal-wrong': 'reveal-wrong .5s ease forwards',
        'reveal-close': 'reveal-close .5s ease forwards',
        'reveal-correct': 'reveal-correct .5s ease forwards',
      },

    },
  },
  plugins: [],
}