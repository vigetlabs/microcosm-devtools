# Contribution Guidelines

Thanks you for considering a contribution to Microcosm Devtools!

## Before Starting

Microcosm Devtools is built using tools written for
[nodejs](http://nodejs.org). We recommend installing Node with
[nvm](https://github.com/creationix/nvm). Dependencies are managed
through `package.json`.

You use the same node version we are developing with by running

```bash
nvm use
```

> You may need to run `nvm install` if you haven't installed the node version on `.nvmrc`

## Getting Started

All commands should be run using yarn. If you haven't switched to [yarn](https://yarnpkg.com/en/) yet, now's a great time!

> If you are familiar with npm then using yarn should be a breeze. You can keep using npm if you'd prefer but you will miss out on the safety and security of yarn

You can install dependencies with:

```bash
yarn install
```

## Code Formatting

We are using [prettier](https://github.com/prettier/prettier) combined with [eslint](http://eslint.org/) to keep formatting and format linting easy. We do that by running:

```bash
yarn format
```

## Deployment

The following steps are required to push a new release:

1. Update the chrome manifest version (`shells/chrome/manifest.json`)
2. `yarn release`
3. Upload `dist/chrome.zip` to the Chrome Extension Store
