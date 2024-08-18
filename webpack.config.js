const path = require('path');

module.exports = {
  entry: './src/index.js', // Vstupní bod vaší aplikace
  output: {
    filename: 'bundle.js', // Název výstupního souboru
    path: path.resolve(__dirname, 'dist'), // Cesta k výstupnímu adresáři
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Použití na všechny CSS soubory
        use: ['style-loader', 'css-loader', 'postcss-loader'], // Nástroje pro zpracování CSS
      },
      {
        test: /\.js$/, // Použití na všechny JS soubory
        exclude: /node_modules/, // Vynechání složky node_modules
        use: {
          loader: 'babel-loader', // Použití Babelu pro transpiling JS
        },
      },
    ],
  },
  devtool: 'source-map', // Generování source map pro ladění
};
