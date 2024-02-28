import uiConfig from '@repo/ui/tailwind.config';
import type { Config } from 'tailwindcss';

const config: Config = {
  ...uiConfig,
  content: [
    ...(uiConfig.content as string[]),
    '../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}', // uiの中のファイルも読み込む
  ],
};

export default config;
