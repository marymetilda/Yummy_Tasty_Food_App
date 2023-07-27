# Namasthe-React

## Inception

We can bring the react to the javascript program using cdn links.
React Element is an object.
This element using ReactDOM.createRoot will create html
ReactDOM.createRoot is responsible for assing root for react.
When we do root.Render this render method, is super powerful, it is helping us to put the object on to our page as react element.
Then it will be converted into html and when the browser understands it will be printed on the page.

React.createElement api takes three arguments.

1. name of the tag (h1, div, span ect.)
2. attributes - these are objects, the attribute pass to the tag ({id: 'sfs'} ect.)
3. children -
   -1. children could be a normal react element
   -2. if we have to give multiple children, suppose the parent has multilple children, the react elements has to pass as a list [array]

In React the order of the file matters.
After the order the root realy matters.

Inside an html when we do a root.render(), what ever we are passing through root.render(), it replaces what is exiting inside the root.
If there is something on the top and the bottom of the page we can still use react just in a small portion of the page just using the id root. Because when root.render() done it affects only the root over the html. Rest of the html remain the same in the webpage.

React is a library. It can be imported as a javascript file in the code and it gives super powers.

## Ignite React Project

- npm : npm helps to manage the packages. But it does not stand for node package manager

- npm init / npm init -y
  -The second one skip most procedure

- package.json is a configuration for the npm.

- packages are also known as dependancies.

  - our project is dependent on lot of packages. Those packages the project is dependent on is known as dependancies.

- and npm manages the version on that packages.

- The most important package in our project is bundler.

  - a bundler help to clear, compress, bundles and packages the code to ready to ship for production.
    eg: webpack, parcel, weed ect.

- format to install any packages

  - npm install <package name>

- install parcel bundler in the app
  -npm install -D parcel

- There are two types of dependancies that we can install

  1. Dev dependancy
  2. Normal dependancy

- Dev dependancy

  - It is normally required for the development phase.

- Normal dependancy

  - They are also used in production.

- ^ is called caret.
- ~ is called tilde.
- suppose if tomorrow if there is a minor update in the package version, parcel will automatically upgrades with version if we put caret.
- if we use tilde it will install the major version automaticall.
- always better to put ^ since it is safe to upgarde minor version than major version.

- package joson is a configuration for npm. It keep tracks of the version of the packages installed into our app.

- package.lock.json locks the exact version and keep the record of it.

- package.json has the approx version of the package and package.lock.json has the exact version.

- the dependancy have an integrity property in the lock file, it has a hash(sha512).
- package.lock.json keeps a hash to verify what ever there in my mechine is the same version which is been deployed on the production.

- node modules

  - node modules contains all the code that we fetch from npm.

- package.json is a configuration where as the node modles are like the data base.

- trasitive dependancies :- each dependencies can have it's on dependencies.

- node modules is a collection of dependancies.

- if we have package.json we can regenerate all node modules even if we delete it.

- to ignite the app

  - npx parcel index.html

- npx is executing the package.
- npm install the package.

- CDN links are not a prefered way to bring react into a project. Because

  - fetching from CDN takes a costly operation.
  - we have to keep changing the version of the react each time when it upgrades. so it is better to have react into the package.json, it is easier to manage all the dependancies and it is very easy to manage react also as one of the dependencies inside our npm package.json.

- npm install react
- npm install react-dom / npm i react-dom

- then when we run our code after removing cdn links, it throws a reference error saying that react is not defined.

- to fix it we need to import react in our js file.
  -import React from 'reat'
  -import ReactDOM from 'react-dom/client'

- normal javascript file cannot have imports or exports.
  That is why we need to tell the browser that this file is not a normal browser file, it is a module. so we have to add type attribute as module in the script tag of App.js

- for deleting the cache

  - rm -rf .parcel-cache

- parcel:
  - Dev build
  - provides local server
  - HMR = Hot Module Replacement (Refresh the page automatically)
  - File Watching Algoritham - written in C++
  - Caching - Faster Builds
  - image optimization
  - Minification
  - Bundling
  - Compress
  - Consistent Hashing
  - Code Splitting
  - Differential Bundling - to support older browsers
  - Diagnostic
  - Error Handling
  - Host app on HTTPs
  - Tree Shaking
  - Different dev and production bundles
    command for development: npx parcel build index.html
