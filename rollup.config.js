import resolve  from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"
import babel    from "rollup-plugin-babel"
import uglify   from "rollup-plugin-uglify"
import pkg      from "./package.json"

export default [
	{
		input  : "src/is-image-loaded-async.js",
		output : {
			name  : "isImageLoadedAsync",
			file  : pkg.unpkg,
			format: "umd"
		},
		plugins: [
			resolve(),
			commonjs(),
			babel(),
			uglify()
		]
	},
	{
		input : "src/is-image-loaded-async.js",
		output: [
			{file: pkg.main, format: "cjs"},
			{file: pkg.module, format: "es"}
		]
	}
]