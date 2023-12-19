# CMS

This template should help get you started developing with Vue 3 in Vite.

## TODOS

1. [X] change path of index.html
2. [X] change path of main & App.vue
3. [X] declare routes
4. [X] install mitt
5. [X] global err handler (未定)

// 加入的優點: 客戶使用時報錯可以配合UI即時回傳錯誤

// 加入的缺點: 可忽略的錯誤也會被回傳 ex: prompt cancel

6. [X] add screenWidth
7. [X] $date
8. [X] install fontawesome
9. [X] install element
1. [X] install dayjs
1. [X] tailwindcss
1. [X] install i18n
1. [ ] redesign layout
1. [X] add cust component `<status>`
1. [X] add cust method `formate number`
1. [ ] add quasar or other table
1. [X] 因為新型態element-plus locale 加入，語系的切換方法要再確認
1. [X] 檢查舊的語系切換方法是否可用
1. [ ] change title when router updated (title & description changer)
2. [X] axios
2. [ ] global locale 是否要繼續使用
2. [ ] router 的規則調整
2. [ ] state
2. [ ] Uploader update
2. [X] Type of backendresponse
2. [ ] get ip with .race
2. [ ] get ip and stored in local
2. [X] cust axios property errorHandler

## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support for `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1) Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2) Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Customize configuration

See [Vite Configuration Reference](https://vitejs.dev/config/).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Type-Check, Compile and Minify for Production

```sh
npm run build
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```
