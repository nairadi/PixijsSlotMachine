// module.exports = {
//     transform: {
//       '^.+\\.jsx?$': 'babel-jest'
//     },
//     moduleNameMapper: {
//       '^pixi.js$': '<rootDir>/__mocks__/pixi.js'
//     },
//     moduleFileExtensions: ['js', 'jsx'],
//     testEnvironment: 'node',
//   };

module.exports = {
    transform: {
      '^.+\\.jsx?$': 'babel-jest'
    },
    moduleNameMapper: {
      '^pixi.js$': '<rootDir>/__mocks__/pixi.js'
    },
    moduleFileExtensions: ['js', 'jsx'],
    testEnvironment: 'node',
  };