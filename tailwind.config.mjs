/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamly: {
        radio: ['var(--font-radio-canada)', 'sans-serif'],
      },
      colors: {
        mv_black: '#0a0a0a',      // Fundo principal [cite: 5, 41]
        mv_blue: "#80dbdd",       // Azul dos detalhes e botões [cite: 7, 36, 103]
        mv_green: "#b5ed7f",      // Verde claro dos detalhes e botões [cite: 7, 36, 103]
        mv_neon: '#ccff00',       // Verde limão dos detalhes e botões [cite: 7, 36, 103]
        mv_red: "#ff3131",        // Vermelho dos detalhes e botões [cite: 7, 36, 103]
        mv_orange: "#ff914d",     // Laranja dos detalhes e botões [cite: 7, 36, 103]
        mv_background_white_gradient: "#37393b", // Fundo branco dos cards e dashboard [cite: 22, 118]
        mv_background_black_gradient: "#17191a", // Fundo preto dos cards e dashboard [cite: 22, 118]
        mv_card: '#1a1a1a',       // Fundo dos cards e dashboard [cite: 22, 118]
        mv_cian_gradient: "#5de0e6",
        mv_blue_gradient: "#004aad",
      },
    },
  },
  plugins: [],
};

export default config;