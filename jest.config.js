// jest.config.js

module.exports = {
  verbose: true,
  collectCoverageFrom: ['src/**/*.{js,jsx}'],
  setupTestFrameworkScriptFile: '<rootDir>/jest.setup.js',
  testMatch: ['<rootDir>/src/**/?(*.)test.{js,jsx}'],
  testEnvironment: 'jsdom',
  transform: {
    '^.+\\.(js|jsx)$': '<rootDir>/node_modules/babel-jest',
    '^.+\\.css$': '<rootDir>/config/jest/cssTransform.js',
    '^(?!.*\\.(js|jsx|css|json)$)': '<rootDir>/config/jest/fileTransform.js',
  },
  transformIgnorePatterns: ['[/\\\\]node_modules[/\\\\].+\\.(js|jsx)$'],
  moduleFileExtensions: ['js', 'jsx'],
};
