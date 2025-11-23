const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  mode: 'development',
  entry: './src/main.tsx',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    clean: true,
  },
  devServer: {
    port: 4200,
    host: 'localhost',
    historyApiFallback: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@libs': path.resolve(__dirname, '../../libs'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-react', { runtime: 'automatic' }],
            '@babel/preset-typescript',
          ],
        },
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [
    new ModuleFederationPlugin({
      name: 'container',
      remotes: {
        mfe1: 'mfe1@http://localhost:4201/remoteEntry.js',
        mfe2: 'mfe2@http://localhost:4202/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true,
          strictVersion: false,
          requiredVersion: false,
        },
        'react-dom': {
          singleton: true,
          strictVersion: false,
          requiredVersion: false,
        },
        'react-router-dom': {
          singleton: true,
          strictVersion: false,
          requiredVersion: false,
        },
        '@react-demo/components': {
          singleton: true,
          strictVersion: false,
          requiredVersion: '2.0.0',
        },
        '@react-demo/utils': {
          singleton: true,
          strictVersion: false,
          requiredVersion: '1.0.0',
        },
      },
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
  ],
};
