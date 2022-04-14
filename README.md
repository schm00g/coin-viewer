# coin-viewer

See [demo](https://coin-viewer-7munj60j9-schm00g.vercel.app/) hosted on Vercel.

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

This application fetches the top 100 coins by market cap using the CoinGecko API. The end-user can then filter tokens using string based search, save favorites and sort table data. 

Nuxt.js framework was used to build on top of Vue - it is ideal for iterating on single page applications (SPAs). It comes with in-built routing, directory structure and many plugins plus a developer community. It quickly scaffolds projects with configuration. Some initial choices included:
* JavaScript
* Tailwind CSS (inline utility css framework)
* Axios (interface for HTTP requests, improved readability over standard fetch())
* PWA (for offline use) - PWA module configuration in `nuxt.config.js`
* ESLint & Prettier (code style guidelines - consistency)
* SPA (faster loading times, caching capabilities, only relevant code is updated, responsive for better UX)
* Node.js hosting

For state management Vuex (flux pattern) is used. For smaller application props and events can suffice but Vuex was chosen here as it is industry standard and Nuxt.js has Vuex baked in. State management patterns mean that there is a single source of truth - keeping mutations to the state predictable.

For the UI components the lightweight, open-source, well supported, and documented Buefy (built on top of Bulma) was used. 

Configuring the app to be a PWA allows the user to download what feels like a native desktop application - allowing for offline use.

Chose to work with Vue 2 as some libraries have not yet caught up with Vue 3.

Vue.js  dev tools essential for iterating and debugging.

App has been hosted on Vercel for ease of accessibility.

## Basic Exercises

Added a [folder](https://github.com/schm00g/coin-viewer/tree/master/basic) in this repo with my answers.