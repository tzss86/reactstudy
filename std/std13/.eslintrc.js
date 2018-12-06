module.exports = {
	"env": {
	    "browser": true,
	    "node": true,
	},
	"parser": "babel-eslint",
    "extends": "airbnb",
    "rules": {
	  	"react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
	  	"import/no-extraneous-dependencies": ["error", {"devDependencies": true}],
	  	"no-console": 0,
	  	"react/prefer-stateless-function": 0
	}
};