module.exports = {
  preset: '@react-native/jest-preset',
  transformIgnorePatterns: [
    'node_modules/(?!(react-native|@react-native|@react-navigation|@react-native-community|react-native-image-picker)/)',
  ],
  moduleNameMapper: {
    '@react-native-community/geolocation': '<rootDir>/__mocks__/@react-native-community/geolocation.ts',
  },
};
