const path = require('path')
module.exports = {
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devtool: 'inline-source-map',
  // module: {
  //   rules: [
  //     {
  //       test: /.js$/,
  //       loader: 'babel-loader',
  //       options: {
  //         presets: ['es2015', 'react']
  //       }
  //     }
  //   ]
  // }

  devServer: {
    hot: true,
    inline: true,
    host: '0.0.0.0',
    port: 4000,
    contentBase: __dirname + '/public/',
},

module:{
    loaders: [
        {
            test: /.js$/,
            loader: 'babel',
            exclude: /node_modules/,
            query: {
                cacheDirectory: true,
                presets: ['es2015', 'react'],
                plugins: ["react-hot-loader/babel"]
            }
        }
    ]
},







}

