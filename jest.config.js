module.exports = {
    transform: {
      "^.+\\.jsx?$": "babel-jest"
    },
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy"
    },
    moduleFileExtensions: ["js", "jsx"],
    testMatch: ["**/__tests__/**/*.(js|jsx)", "**/?(*.)+(spec|test).(js|jsx)"],
    preset: "@babel/preset-react"
};