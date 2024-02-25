import myconfig from '@repo/config-tailwind';
import type { Config } from 'tailwindcss';

const config: Config = {
  ...myconfig,
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  plugins: [],
};
export default config;
