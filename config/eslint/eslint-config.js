import { join } from path

module.exports = {
  extends: 'standard-with-typescript',
  parserOptions: {
      project: join(__dirname, 'tsconfig.json')
  },
  rules: {
    'no-console': 'off',
    'no-restricted-syntax': 'off'
  }
};
