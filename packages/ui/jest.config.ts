export default {
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest"
  },
  setupFilesAfterEnv: [
    '<rootDir>/jest-setup.ts'
  ],
}