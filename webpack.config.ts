import path from 'path'
import webpack from 'webpack'
import { buildWebpack } from './config/build/buildWebpack'
import { BuildMode, BuildPlatform } from './config/build/types/types'

interface IEnvVariables {
	mode?: BuildMode
	port?: number
	analyzer?: boolean
	platform?: BuildPlatform
}

export default (env: IEnvVariables) => {
	const paths = {
		output: path.resolve(__dirname, 'build'),
		entry: path.resolve(__dirname, 'src', 'index.tsx'),
		public: path.resolve(__dirname, 'public'),
		html: path.resolve(__dirname, 'public', 'index.html'),
		src: path.resolve(__dirname, 'src'),
	}

	const config: webpack.Configuration = buildWebpack({
		port: env.port ?? 3000,
		mode: env.mode ?? 'development',
		paths,
		analyzer: env.analyzer,
		platform: env.platform ?? 'desktop',
	})
	return config
}
