const path = require('path');
module.exports = {
  mode: 'development',
  entry: './src/index.js', // ponto de entrada do seu código
  module: {
    rules: [
      {
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.js'], // extensões a serem resolvidas
  },
  output: {
    path: path.resolve(__dirname, 'dist'), // Caminho para a pasta de saída
    filename: 'main.js', // Nome do arquivo de saída gerado pelo Webpack
  },
};

