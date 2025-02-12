// tailwind.config.js
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}", // Ajusta según la estructura de tu proyecto
    ],
    theme: {
      extend: {
        colors: {
          primary: "#646cff",
          red: {
            50: "#ffebee",
            100: "#ffcdd2",
            200: "#ef9a9a",
            300: "#e57373",
            400: "#ef5350",
            500: "#f44336",
            600: "#e53935",
            700: "#d32f2f",
            800: "#c62828",
            900: "#b71c1c",
          },
        },
      },
    },
    plugins: [],
  };