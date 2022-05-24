module.exports = {
  testEnvironment: 'jsdom',
  transform: {
    // 将.js后缀的文件使用babel-jest处理
    "^.+\\.js$": "babel-jest",
  },
  collectCoverage: true,
  // coverageDirectory: './report.__test__'
  // "transformIgnorePatterns": ["<rootDir>/node_modules/"]
  // preset: 'ts-jest',
}