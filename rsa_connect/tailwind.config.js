/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      backgroundColor: {
        'blue-dark': '#000091',
        'orange-pale': '#febf80',
      },
      screens: {
        'desktop': '1024px', // Ajoutez une nouvelle taille d'écran pour la version de bureau
      },
    },
    // Ajoutez une classe personnalisée pour positionner à droite en version ordinateur
    customUtilities: {
      '.modal-right-desktop': {
        '@screen desktop': {
          right: '0',
        },
      },
    },
  },
  plugins: [],
};
