# Microcosm DevTools

Instantiate your Microcosm in debug mode to inspect its inner
workings.

```javascript
let repo = new Microcosm({ debug: true })
```

![Demo](./assets/screenshot.png)

## Requirements

1. Microcosm 12.9.0 or higher
2. Chrome

## Installation

Until we ship to the Chrome app store, this is pretty low level:

1. Clone this repo
2. `npm install` (Or `yarn install` if you are using yarn as the package manager)
3. `npm run build`
4. Open Chrome extension page
5. Check "developer mode"
6. Click "load unpacked extension", and choose `shells/chrome`.

## Contributing

1. Clone this repo
2. `npm install`
3. `npm run dev`
4. A plain shell with a test app will be available at `http://localhost:8080`.

### License

[MIT](http://opensource.org/licenses/MIT)

### Credit where due

This is based heavily on the [vue-devtools](https://github.com/vuejs/vue-devtools). Thanks Vue.js for writing great stuff!
