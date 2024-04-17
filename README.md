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

## Notice
- Pure static generation of the site, *the client to do user language detection and automatic jump experience is not good*, it is best to **detect and automatic jump on the server**.