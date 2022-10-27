const path = require('path');
const { externals: uxcoreExternals } = require('@ux/webpack-config');
const TerserPlugin = require('terser-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const config = {
  entry: './src/index.tsx',
  output: {
    filename: 'index.js',
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'umd',
    globalObject: 'this',
  },
  mode: 'production',
  devtool: 'source-map',
  devServer: {
    port: 8081
  },
  optimization: {
    minimizer: [new TerserPlugin()]
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    fallback: {
      http: path.resolve(__dirname, 'src/polyfills/https.ts'),
      https: path.resolve(__dirname, 'src/polyfills/https.ts')
    }
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
            plugins: ['babel-plugin-styled-components', '@babel/plugin-transform-runtime']
          }
        }
      },
      {
        test: /\.css$/i,
        use: ['style-loader', {
          loader: 'css-loader',
          options: {
            url: {
              filter: (url) => !(url.startsWith('data:image/svg+xml'))
            }
          }
        }]
      }
    ]
  },
  plugins: [new ForkTsCheckerWebpackPlugin()],
  externals: {
    ...uxcoreExternals
  }
};

if (process.argv.includes('--analyze')) config.plugins.push(new BundleAnalyzerPlugin());

module.exports = config;
