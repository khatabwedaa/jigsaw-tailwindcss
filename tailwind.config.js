const colors = require('tailwindcss/colors');

module.exports = {
  purge: [
    'source/**/*.blade.php',
    'source/**/*.md',
    'source/**/*.html',
  ],
    theme: {
        extend: {
            colors: {
                teal: colors.teal,
                primary: '#34AC72'
            },
            fontFamily: {
                roboto: ["Roboto"],
                cairo: ["Cairo"],
            },
            spacing: {
                128: "32rem",
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
};