import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Figtree', ...defaultTheme.fontFamily.sans],
            },
        },
    },

    plugins: [
        forms,
        function({addUtilities}){
            const newUtilities = {
                ".scrollbar-thin" : {
                    scrollbarWith : "thin",
                },
                ".scrollbar-color-white" : {
                    scrollbarColor : "rgb(243 244 246) rgb(17 24 39)",

                },
                ".scrollbar-color-black" : {
                    scrollbarColor : "rgb(17 24 39) rgb(243 244 246)",
                },
                ".scrollbar-webkit" : {
                    "&::-webkit-scrollbar" : {
                        width : "8px"
                    },
                    "&::-webkit-scrollbar-track" : {
                        background : "white"
                    },
                    "&::-webkit-scrollbar-thumb" : {
                        backgroundColor : "rgb(31 41 55)",
                        borderRadius : "20px",
                        border: "1px solid white"
                    }
                }
            }

            addUtilities(newUtilities, ["responsive", "hover"]);
        }
    ],
};
