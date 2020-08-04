module.exports = {
	root: true, // 该文件所在目录为根目录, eslint不会再往上查找
	parserOptions: {
		ecmaVersion: 6,
		ecmaFeatures: {
			jsx: true,
		},
	},
	plugins: ["prettier"],
	rules: {
		semi: ["error", "always"], // 分号 'off/warn/error, always/never'
		quotes: ["error", "double"], // 引号 'off/warn/error, double/single'
		"prettier/prettier": "error",
	},
};
