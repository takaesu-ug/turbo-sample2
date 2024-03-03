// https://github.com/vercel/style-guide/blob/canary/prettier/index.js
module.exports = {
  endOfLine: 'lf',
  singleQuote: true,
  semi: true,
  trailingComma: 'all',
  tabWidth: 2,
  printWidth: 100,
  useTabs: false,
  // plugins: ['prettier-plugin-packagejson'],
  plugins: ['prettier-plugin-organize-imports'],
};
