module.exports = {
  projects: [
    {
      displayName: 'test',
      setupFiles: [
        '<rootDir>/src/setupTests.js',
      ],
    },
    {
      displayName: 'lint',
      runner: 'jest-runner-eslint',
      testMatch: [
        '<rootDir>/src/**/*.js',
      ],
    },
  ],
};
