import myconfig from '@repo/config-tailwind';
import type { Config } from 'tailwindcss';

const config: Config = {
  ...myconfig,
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  plugins: [],
};
export default config;
