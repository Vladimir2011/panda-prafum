/** @type {import('prettier').Config} */
export default {
  plugins: ['prettier-plugin-tailwindcss'],
  semi: false,
  singleQuote: true,
  printWidth: 100,
  trailingComma: 'all',
  endOfLine: 'lf',
  tailwindStylesheet: './app/assets/css/main.css',
}
