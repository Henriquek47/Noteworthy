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
    filename: 'main.js', // nome do arquivo de saída
    path: path.resolve(__dirname, 'dist'), // caminho onde o arquivo de saída deve ser escrito
  },
};

