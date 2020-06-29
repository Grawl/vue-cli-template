const path = require('path')
const dotenvSafe = require('dotenv-safe')
const isFile = require('is-file')
dotenvSafe.config({
	path: isFile(path.join(process.cwd(), '.env')) ? '.env' : '.env.example',
	allowEmptyValues: true,
})
module.exports = {
	publicPath: process.env.NODE_ENV === 'production' ? process.env.URL : '/',
	devServer: {
		port: process.env.PORT,
	},
}
