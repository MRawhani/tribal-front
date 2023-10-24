/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        main: '#5B315E',
        second: '#FFB71B',
        primary_50: "#F2F4FF",
        primary_100: "#E7EAFF",
        primary_200: "#D1D6FF",
        primary_300: "#ADB3FF",
        primary_400: "#7E81FF",
        primary_500: "#4E4AFF",
        primary_600: "#3625FF",
        primary_700: "#2713EE",
        primary_800: "#200FC8",
        primary_900: "#1D0FA3",
        primary_950: "#08044A",

        seconday_50: "#FEFAEF",
        seconday_100: "#E9E7D8",
        seconday_200: "#D4D0B4",
        seconday_300: "#BBB489",
        seconday_400: "#A79B68",
        seconday_500: "#988A5A",
        seconday_600: "#8C7A52",
        seconday_700: "#69593F",
        seconday_800: "#5A4A39",
        seconday_900: "#4E4135",
        seconday_950: "#2C231C",
        secondary_secondary: "#BC9665",
      },
      fontFamily: {
        sans: ['var(--font-pecita)']
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}
