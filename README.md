# jira

react typescript

### 初始化项目

```bash
npx create-react-app jira --template typescript
```

### 代码格式化

按照`prettier`官网配置`eslint`,`husky`,`lint-staged`等  
[prettier](https://www.prettier.cn/docs/install.html)

### git message

按照`commitlint`官网配置  
[commitlint](https://commitlint.js.org)

```code
yarn add @commitlint/cli @commitlint/config-conventional -D
```

```code
npx husky add .husky/commit-msg "npx commitlint -E HUSKY_GIT_PARAMS"
```
