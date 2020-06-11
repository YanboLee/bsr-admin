/* .eslintrc.js */
module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "extends": "airbnb",
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
    },
    "ecmaVersion": 2017,
    "sourceType": "module"
  },
  "plugins": [
    "react-hooks"
  ],
  "rules": {
    "comma-dangle": [1, {
        "arrays": "only-multiline",
        "objects": "only-multiline",
        "imports": "only-multiline",
        "exports": "never",
        "functions": "only-multiline"
    }],
    "semi-spacing": [2, {"before": false, "after": true}],
    "semi": [2, "always"],
    "camelcase": 0,
    "no-extra-semi": 2,
    "max-len": [2, 120, 4],
    "max-params": [1, 4],
    "max-statements": 0,
    "no-plusplus": 0,
    "no-debugger": 1,
    "no-console": 1,
    "import/no-unresolved": [2, { "ignore": ["^@/"] }],
    "jsx-a11y/click-events-have-key-events": 0,
    'jsx-a11y/no-static-element-interactions': 0,
    'jsx-a11y/no-noninteractive-element-interactions': 0,
    'jsx-a11y/media-has-caption': 0,
    "react/prop-types": 1,
    "react/forbid-prop-types": 0,
    "react/prefer-stateless-function": 0,
    "react/jsx-props-no-spreading": 0,
    "react/jsx-filename-extension": [2, {
      extensions: ['.js', '.jsx', '.tsx', '.ts']
    }],
    "jsx-a11y/anchor-is-valid": 0,
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    // VSCode 的 ESLint 扩展插件暂时无法正确修复这条规则带来的错误
    "react/jsx-one-expression-per-line": 0,
     "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ]
  },
  "settings": {
    "import/resolver": {
      "node": {
        "extensions": [".ts", ".tsx", ".js"]
      }
    }
  }
};