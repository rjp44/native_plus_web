// web/webpack.config.js for

const path = require('path');
const webpack = require('webpack');

const rootDirectory = path.resolve(__dirname, '../');
const appDirectory = path.resolve(__dirname, '../app');

// This is needed for webpack to compile JavaScript.
// Many OSS React Native packages are not compiled to ES5 before being
// published. If you depend on uncompiled packages they may cause webpack build
// errors. To fix this webpack can be configured to compile to the necessary
// `node_module`.
const babelLoaderConfiguration = {
  test: /\.js$/,
  // Add every directory that needs to be compiled by Babel during the build.
  include: [
    path.resolve(appDirectory, 'index.web.js'),
    path.resolve(rootDirectory, 'app'),
    path.resolve(rootDirectory, 'node_modules/react-native-uncompiled'),
    path.resolve(rootDirectory, 'node_modules/react-native-vector-icons'),
    path.resolve(rootDirectory, 'node_modules/react-navigation'),
    path.resolve(rootDirectory, 'node_modules/react-native-drawer-layout'),
    path.resolve(rootDirectory, 'node_modules/react-native-dismiss-keyboard'),
    path.resolve(rootDirectory, 'node_modules/react-native-safe-area-view'),
    path.resolve(rootDirectory, 'node_modules/react-native-tab-view')
  ],
  use: {
    loader: 'babel-loader',
    options: {
      cacheDirectory: true,
      // Babel configuration (or use .babelrc)
      // This aliases 'react-native' to 'react-native-web' and includes only
      // the modules needed by the app.
      plugins: [
          // This is needed to polyfill ES6 async code in some of the above modules
          'babel-polyfill',
          // This aliases 'react-native' to 'react-native-web' to fool modules that only know
          // about the former into some kind of compatibility.
          'react-native-web'
          ],
      // The 'react-native' preset is recommended to match React Native's packager
      presets: ['react-native']
    }
  }
};

// This is needed for webpack to import static images in JavaScript files.
const imageLoaderConfiguration = {
  test: /\.(gif|jpe?g|png|svg)$/,
  use: {
    loader: 'url-loader',
    options: {
      name: '[name].[ext]'
    }
  }
};

module.exports = {
  // your web-specific entry file
  entry: [
      // Need babel polyfills before we include the bundle
      "babel-polyfill",
      // Bundle has to come second
      path.resolve(appDirectory, 'index.web.js')
  ],

  // configures where the build ends up
  output: {
    filename: 'bundle.web.js',
    path: path.resolve('./', 'public')
  },

  // ...the rest of your config
  module: {
    rules: [
      babelLoaderConfiguration,
      imageLoaderConfiguration
    ]
  },

  plugins: [
    // `process.env.NODE_ENV === 'production'` must be `true` for production
    // builds to eliminate development checks and reduce build size. You may
    // wish to include additional optimizations.
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      __DEV__: process.env.NODE_ENV === 'production' || true
    })
  ],

  resolve: {
    // If you're working on a multi-platform React Native app, web-specific
    // module implementations should be written in files using the extension
    // `.web.js`.
    extensions: ['.web.js', '.js']
  },

  devServer: {
    contentBase: path.join(__dirname, "../public"),
    compress: false,
    port: 9000,
    host: "0.0.0.0"
  }
}
