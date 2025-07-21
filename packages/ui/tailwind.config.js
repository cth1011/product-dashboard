import tailwindConfig from '@repo/tailwind-config';

/** @type {import('tailwindcss').Config} */
export default {

  content: [
    './**/*.{js,ts,jsx,tsx}',
  ],
  presets: [tailwindConfig]
};