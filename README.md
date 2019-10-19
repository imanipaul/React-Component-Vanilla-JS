### STEPS

1. create new project
```mkdir projectwork && cd projectwork```

```npm init -y``` 
this automatically creates a package.json
```npm install --save-dev webpack webpack-cli```

2. create the following directory structure:
projectwork
* package.json
* webpack.config.js
* /src
    * index.js
* /dist
    * index.html

3. Starter Code: Follow code in first guide link

4. Follow module section in first guide link, but replace lodash with another package, ex. Tiny

5. Follow loaders section in first guide link, but add `npm install --save-dev @babel/plugin-syntax-dynamic-import`

6. (Optional) follow Sass section in first guide link

Basic app should be running at this point, with simple packages. Do the following to get react working.

1. Install `npm install --save-dev @babel/preset-react`
2. Add ` "@babel/preset-react"` to presets in .babelrc
3. Update *webpack.config.js* with :
`        test: /\.(js|jsx)$/,
` under rules and 
`resolve: {
    extensions: ['*', '.js', '.jsx']
  },`

  4. Then install `npm install --save react react-dom`
  5. Add React and ReactDOM to *src/index.js*
  6. Make sure to give targeted div or section an id!

### GUIDES


* https://www.sitepoint.com/beginners-guide-webpack-module-bundling/
* https://www.robinwieruch.de/minimal-react-webpack-babel-setup
