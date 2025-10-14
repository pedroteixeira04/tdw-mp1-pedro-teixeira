module.exports = {
  testEnvironment: "jsdom",
  transform: {
    "^.+\\.[tj]sx?$": [
      "@swc/jest",
      {
        jsc: {
          parser: {
            syntax: "typescript",
            tsx: true,
            decorators: true,
          },
          transform: {
            react: {
              runtime: "automatic",
            },
          },
        },
      },
    ],
  },
  moduleFileExtensions: ["js", "jsx", "ts", "tsx"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  collectCoverage: true,
  collectCoverageFrom: [
    "app/**/*.{js,jsx,ts,tsx}",
    "!app/test/**",
    "!app/**/index.{js,ts}",
    "!app/**/*.d.ts",
    "!**/node_modules/**",
  ],

  coverageDirectory: "coverage",
  coverageReporters: ["text", "lcov"],
};
