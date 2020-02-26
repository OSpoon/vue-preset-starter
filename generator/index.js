module.exports = (api, options, rootOptions) => {
    // 复制并用 ejs 渲染 `./template` 内所有的文件
    api.render('../template')
    // 修改 `package.json` 里的字段
    api.extendPackage({
        scripts: {
            "serve": "vue-cli-service serve",
            "build:prod": "vue-cli-service build",
            "build:stage": "vue-cli-service build --mode staging",
            "preview": "node build/index.js --preview",
            "lint": "eslint --ext .js,.vue src",
            "new": "plop",
            "clog": "conventional-changelog -p angular -i CHANGELOG.md -s -r 0",
            "svgo": "svgo -f src/icons/svg --config=src/icons/svgo.yml"
        },
        dependencies: {
            "amfe-flexible": "^2.2.1",
            "core-js": "^2.6.5",
            "crypto-js": "^3.1.9-1",
            "eruda": "^1.5.6",
            "jquery": "^3.4.1",
            "js-cookie": "^2.2.1",
            "js-md5": "^0.7.3",
            "plop": "^2.5.3",
            "vant": "^2.0.0-beta.2",
            "vue": "^2.6.10",
            "vue-router": "^3.0.3",
            "vue-wechat-title": "^2.0.5",
            "vuex": "^3.0.1"
        },
        devDependencies: {
            "@babel/plugin-syntax-dynamic-import": "^7.2.0",
            "@vue/cli-plugin-babel": "^3.8.0",
            "@vue/cli-plugin-eslint": "^3.8.0",
            "@vue/cli-service": "^3.8.0",
            "@vue/eslint-config-standard": "^4.0.0",
            "axios": "^0.18.0",
            "babel-eslint": "^10.0.1",
            "babel-plugin-import": "^1.11.2",
            "chalk": "^3.0.0",
            "connect": "^3.7.0",
            "conventional-changelog": "^3.1.18",
            "conventional-changelog-cli": "^2.0.31",
            "eslint": "^5.16.0",
            "eslint-plugin-vue": "^5.0.0",
            "ghooks": "^2.0.4",
            "http-proxy-middleware": "^0.19.1",
            "less": "^3.0.4",
            "less-loader": "^4.1.0",
            "postcss-pxtorem": "^4.0.1",
            "runjs": "^4.4.2",
            "svg-sprite-loader": "^4.2.1",
            "svgo": "^1.3.2",
            "validate-commit-msg": "^2.14.0",
            "vue-cli-plugin-axios": "0.0.4",
            "vue-template-compiler": "^2.6.10"
        },
        eslintConfig: {
            "root": true,
            "env": {
                "node": true
            },
            "extends": [
                "plugin:vue/essential",
                "@vue/standard"
            ],
            "rules": {},
            "parserOptions": {
                "parser": "babel-eslint"
            }
        },
        postcss: {
            "plugins": {
                "autoprefixer": {}
            }
        },
        browserslist: [
            "> 1%",
            "last 2 versions"
        ],
        config: {
            "ghooks": {
                "commit-msg": "validate-commit-msg"
            },
            "validate-commit-msg": {
                "types": [
                    "feat",
                    "fix",
                    "docs",
                    "style",
                    "refactor",
                    "perf",
                    "test",
                    "build",
                    "ci",
                    "chore",
                    "revert"
                ],
                "scope": {
                    "required": false,
                    "allowed": [
                        "*"
                    ],
                    "validate": false,
                    "multiple": false
                },
                "warnOnFail": false,
                "maxSubjectLength": 100,
                "subjectPattern": ".+",
                "subjectPatternErrorMsg": "subject does not match subject pattern!",
                "helpMessage": "",
                "autoFix": false
            }
        }
    })
}
