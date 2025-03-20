import vueParser from 'vue-eslint-parser';

export default {
  env: {
    browser: true,
    node: true,
  },
  extends: [
    'plugin:vue/recommended', // Рекомендации для Vue
    'plugin:prettier/recommended', // Интеграция с Prettier
  ],
  plugins: ['vue'],
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'vue/component-tags-order': [
      'error',
      {
        order: ['script', 'template', 'style'], // Порядок тегов
      },
    ],
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style'], // Порядок блоков
      },
    ],
  },
};