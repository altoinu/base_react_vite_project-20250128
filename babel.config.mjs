const config = {
  presets: [
    // https://medium.com/trabe/testing-css-modules-in-react-components-with-jest-enzyme-and-a-custom-modulenamemapper-8ff86c7d18a2
    ["@babel/preset-env", { targets: { node: "current" } }],
    // https://jestjs.io/docs/tutorial-react#setup-without-create-react-app
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};

export default config;
