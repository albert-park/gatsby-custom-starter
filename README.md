# A Custom Gatsby Starter

Boilerplate [Gatsby](http://gatsbyjs.org) starter for getting up and running writing React.

## Features

ESLint with custom configuration,
SASS,
CSS Modules,
Prettier,
Axios

## Setup

Install Gatsby:
```
npm install -g gatsby-cli
```
Install dependencies:
```
yarn install OR
npm install
```

Start the local environment:
```
gatsby develop
```

Site will open at `localhost:8000`

To build for production:
```
gatsby build
```

## Source Code Directory Structure

Front-end resources are located under `src`:

  - `/assets`
    - Images/gifs live here
  - `/components`
    - React components live here. Arranged as an `index.js` file and a component-named `scss` file, imported as a CSS Module
  - `/layouts`
    - Base page layout. Contains the `<head>` tag elements in component `Helmet`
  - `/pages`
    - Individual html pages. Use these filename as page name passed to the `Link` component
  - `/styles`
    - Global/shared styles only
    - Use `module-import.global.scss` as an importable module in other `scss` to access custom vars/mixins
    - `/_custom`
      - Custom vars/mixins files live here.
