module.exports = {
    root: true,
    extends: [
      'plugin:tailwindcss/recommended',
      'plugin:prettier-vue/recommended',
      'prettier',
    ],
    plugins: ['tailwindcss', 'unused-imports'],

    ignorePatterns: ['!.*rc.*', '!*.config.js', 'dist', 'static'],
}