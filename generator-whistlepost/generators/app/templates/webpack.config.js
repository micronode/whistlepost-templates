const path = require('path');
var ExtractTextPlugin = require("extract-text-webpack-plugin");
const GoogleFontsPlugin = require("google-fonts-webpack-plugin")

module.exports = {
  entry: './src/assets/js/${projectId}.js',
  output: {
    filename: 'js/${projectId}.bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /\\.css\$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: "css-loader"
        })
      },
	  {
        test: /\\.(png|svg|jpg|gif)\$/,
        use: [
		  {
            loader: 'file-loader',
            options: {
            	'outputPath': 'images/',
            	'useRelativePath': true,
            	publicPath: '/assets/$projectId/images/'
			}
          }
	  	]
      },
	  {
        test: /\\.(woff|woff2|eot|ttf|otf)\$/,
        use: [
		  {
            loader: 'file-loader',
            options: {
            	'outputPath': 'fonts/',
            	'useRelativePath': true,
				publicPath: '/assets/$projectId/fonts/'
			}
          }
        ]
      },
	  {
        test: require.resolve('jquery'),
        use: [
        	{
			  loader: 'expose-loader',
			  options: 'jQuery'
		    },
		    {
				loader: 'expose-loader',
				options: '\$'
			}
		]
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("css/${projectId}.bundle.css"),
    new GoogleFontsPlugin({
		fonts: [
			{ family: "Roboto" }
		],
		path: 'fonts/',
		filename: 'css/fonts.css'
	})
  ]
};
