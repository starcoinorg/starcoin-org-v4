# Starcoin Website - V4

## Prerequisites
- **Node.js** - `v20.3.0` or higher. 
- **pnpm**

## Frameworks - Technology stack
- `Astro`: [https://astro.build/](https://astro.build/)
- `React`: [https://react.dev/](https://react.dev/)

## CLI

### `pnpm install` 
Install project dependencies and initialize the project.

### `pnpm start`
Start local development server.

### `pnpm build`
Compile and package the project. The packaged files will be output to the `dist` directory. These are also the files that will be deployed.

### `pnpm preview`
Preview project compilation and packaging files locally.

## ⚠️ 注：关于部署
- 项目编译打包需要 `Node.js` 和 `pnpm`，关于如何安装/启用 `pnpm` 请参阅 [pnpm installation](https://pnpm.io/installation)

- 运行 `pnpm build` 命令即可编译，编译结果会输出到项目根目录下的 `dist` 目录，**直接部署这个目录的内容** 即可

- 由于是静态生成站点，用户如果直接访问根域名而不带`/en`、`/zh` 等语言目录时，会自动跳转到默认语言路径 `/en`。如果想**根据用户浏览器语言自动跳转对应语言**，需要在服务器上自定配置实现。
>- 为了添加 `sitemap` 利于 SEO, 需要配置项目域名以生成 sitemap 内的 url。
>- 目前配置了线上域名 `https://starcoin.org`, 当直接访问**不带语言路径的测试域名** 时，会自动跳转 `https://starcoin.org/en`。
>- 直接访问**带语言路径的测试域名** (如：`https://v4.starcoin.org/en`)，即可在测试阶段避免这个自动跳转问题。