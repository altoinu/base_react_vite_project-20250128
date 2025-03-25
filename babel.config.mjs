const config = {
  presets: [
    // babel required for jest to work in vite react project
    // https://jenchan.biz/blog/dissecting-the-hell-jest-setup-esm-typescript-setup
    // https://jestjs.io/docs/getting-started#generate-a-basic-configuration-file
    // https://jestjs.io/docs/getting-started#using-babel
    // https://stackoverflow.com/questions/62820035/babel-throwing-support-for-the-experimental-syntax-jsx-isnt-currently-enabled
    // https://jestjs.io/docs/tutorial-react
    ["@babel/preset-env", { targets: { node: "current" } }],
    // https://jestjs.io/docs/tutorial-react#setup-without-create-react-app
    ["@babel/preset-react", { runtime: "automatic" }],
  ],
};

export default config;
