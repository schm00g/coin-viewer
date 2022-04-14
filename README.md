# coin-viewer

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server (to use as installable PWA for offline use)
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

## High-level description

This application fetches the top 100 coins using the CoinGecko API. The end-user can then search for tokens, save favorites and sort table data. Nuxt.js framework was used to build on top of Vue - it is ideal for iterating on SPAs. It allows quick scaffolding of projects with easy configuration. My initial choices included:
* JavaScript
* Tailwind CSS (inline utility css framework)
* Axios (interface for HTTP requests, improved readability over fetch())
* PWA (for offline use)
* ESLint (code style guidelines - consistency)
* Jest (unit tests)
* SPA / server side rendering
* Node.js hosting

For state management Vuex (flux pattern) is used. Vuex is probably more justified in a larger
application. It allows for actions and mutations on our program state. For smaller application props and events will suffice. Nuxt.js has Vuex baked in.

For the UI components the lightweight, well supported and documented Buefy (built on top of Bulma) was used. 

Configuring the app to be a PWA allows user to download a native version of the client for
offline use.

See [demo](https://coin-viewer-7munj60j9-schm00g.vercel.app/) hosted on Vercel.