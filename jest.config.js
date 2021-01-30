module.exports = {
  // The root of your source code, typically /src
  // `<rootDir>` is a token Jest substitutes
  roots: ["<rootDir>/src"],

  moduleNameMapper: {
    "\\.(css|less)$": "identity-obj-proxy",
  },
  // Runs special logic, such as cleaning up components
  // when using React Testing Library and adds special
  // extended assertions to Jest
  setupFiles: ["jest-localstorage-mock"],

  setupFilesAfterEnv: ["./jest.setup.js"],

  // Test spec file resolution pattern
  // Matches parent folder `__tests__` and filename
  // should contain `test` or `spec`.
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*", "!dist/*", "!src/index.js"],

  coverageDirectory: "<rootDir>/coverage/",
  coverageThreshold: {
    global: {
      branches: 20,
      functions: 30,
      lines: 50,
      statements: 50,
    },
  },

  // Module file extensions for importing
  moduleFileExtensions: ["js", "jsx", "json", "node"],
};
