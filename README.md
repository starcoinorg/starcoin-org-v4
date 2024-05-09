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

## ⚠️ 注：关于 `news` 写作
### 文档目录
不同框架设计所致，文档目录由以前的 `/content/news/post` 移到了 `/src/content/post`。

### 关于文档头部的元信息定义
以前文档头部元信息定义使用如下的 `toml` 格式:

```markdown
+++
title = "2022 Starcoin Year in Review (1)-Where it all began"
date = "2022-12-21"
summary = "With Christmas just around the corner, we are happy ..."
author = "Starcoin"
tags = [
    "Starcoin"
]
archives="2022"

+++
```

此种格式的问题是 **包括本框架和 Github 在内的很多系统不认识它**，所以换成了更通用的 `yaml` 格式：

```markdown
---
title: "2022 STARCOIN Roadmap Update｜Stepping Solidly Forward"
date: 2022-07-12
summary: "More important than keeping achievements alive is ..."
author: "Starcoin"
tags: [
    "Starcoin"
]
archives: "2022"
image: https://cdn.pixabay.com/photo/2024/04/04/03/08/ai-generated-8674235_1280.png
draft: true
---
```

同时，相关字段也有所变化：

* `title`,`date`,`summary` 3 个字段 **必填**
* `date` 字段 **不要加引号**
* `image` 字段 **请使用绝对路径**，相对路径图片使用方式很麻烦
* 增加了一个 `draft` 可选字段，如果**把它设置为 `true`**, 则代表文档处于 **草稿状态，不会被发布到线上**


## ⚠️ 注：关于部署
- 项目编译打包需要 `Node.js` 和 `pnpm`，关于如何安装/启用 `pnpm` 请参阅 [pnpm installation](https://pnpm.io/installation)

- 运行 `pnpm build` 命令即可编译，编译结果会输出到项目根目录下的 `dist` 目录，**直接部署这个目录的内容** 即可

- 由于是静态生成站点，用户如果直接访问根域名而不带`/en`、`/zh` 等语言目录时，会自动跳转到默认语言路径 `/en`。如果想**根据用户浏览器语言自动跳转对应语言**，需要在服务器上自定配置实现。
>- 为了添加 `sitemap` 利于 SEO, 需要配置项目域名以生成 sitemap 内的 url。
>- 目前配置了线上域名 `https://starcoin.org`, 当直接访问**不带语言路径的测试域名** 时，会自动跳转 `https://starcoin.org/en`。
>- 直接访问**带语言路径的测试域名** (如：`https://v4.starcoin.org/en`)，即可在测试阶段避免这个自动跳转问题。
