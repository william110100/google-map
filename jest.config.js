module.exports = async () => {
  return {
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: "coverage",
    coveragePathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
    coverageThreshold: {
      global: {
        branches: 10,
        functions: 10,
        lines: 10,
        statements: 0,
      },
    },
    displayName: {
      color: "blue",
      name: "CLIENT",
    },
    prettierPath: "<rootDir>/.prettierrc.json",
    setupFilesAfterEnv: ["<rootDir>/src/setupTests.js"],
    testEnvironment: "jsdom",
    testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[jt]s?(x)"], // Default
    testPathIgnorePatterns: ["<rootDir>/build/", "<rootDir>/node_modules/"],
    testTimeout: 5000, // Default
    verbose: true,
  };
};
