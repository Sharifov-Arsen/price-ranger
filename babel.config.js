module.exports = {
  presets: ["@babel/preset-env", "@babel/preset-react"],
  plugins: ["@babel/plugin-proposal-class-properties"],
  env: {
    test: {
      plugins: ["babel-plugin-transform-es2015-modules-commonjs"],
    },
  },
};
