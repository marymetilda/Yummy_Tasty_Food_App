# YummyTastyFoodApp

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
  - Tree Shaking - remove unsed code
  - Different dev and production bundles
    command for development: npx parcel build index.html

- production build

  - npx parcel build index.html

- when parcel dev is executed it generates a development bin in the project and its hosted into localhost1234.
  When it generates a development bin it put it inthe dist folder.

- browserslist.dev
- In package.json we should mention what all browsers should support our project

## Laying the foundation

- Just like dom elements in react we have react elements which are more like dom elements.

- JSX

  - JSX is a javascript syntax which is easier to create react element.

  - jsx is not a part of react
  - jsx makes the coding easy
  - jsx is not html inside javascript
  - jsx has html/xml like syntax
  - jsx is not pue javascript
  - jsx is transplied before it reaches the js engine by parcel-babel.
  - in html we give class and in jsx it is className
  - in html attributes use hiphens but in jsx it should be in camelCase
  - if the jsx is in multiple line it should be wrapped in round brackets

- React Component

  - There are two types of components in react
    - Class based component - OLD
    - Functional Component - NEW

- React Functional component

  - react functional component is just a javascript function which returs a jsx element
  - component should start with a capital letter

- jsx sanitises tha data from api

## Taking is cheap and show me the code

- before building app do planig and draw wireframe

  - Header
    - logo
    - Nav Items
  - Body
    - Search
    - Restaurantcontainer
      - RestaurantCard
        - Img
        - Name of Restaurant
        - Star rating
        - cuisine
        - delevery time
  - Footer
    - Copyright
    - Links
    - Adress
    - Contact

- component composition

  - calling a component inside another component is known as component composition

- config driven UI

  - controlling the UI, how the UI looks like using config/data. The config come from backend.

- Do not use index as key on mapping.

- React is efficient in dom manipulation.
- React is fast because it can do faster dom manipulation.
- It can do efficient dom manipulation.

# React Hooks

- Normal JS utility functions written by facebook developers
- useState()
- useEffect()

- useState
  - State Variable
  - it maintains the state of the component
  - Whenever a state variable updates react rerender the component

# React Algoritham

- React uses Reconciliation Algoritham
- It is also known as React Fiber

- Whenever we have the UI react will create a Virtual DOM of it

  - Virtual DOM
    - Virtual DOM is not Actual DOM
      - Actual DOM
        - DOM are the tags (eg: <div> <img> ect.)
    - Virtual DOM is a representation of the Actual DOM
    - Virtual DOM is basically those react elements.
    - Virtual DOM is nothing but normal react object(may have nested object).

- Diff Algoritham

  - Diff Algoritham finds out the difference between two virtual DOMs.

- When we click of the top rated restaurants button, it finds out the difference between the old virtual DOM and the new virtual DOM.

- It will calculate the differce and it will apply the DOM on every render cycle

- This whole algoritham is known as React Fiber.
- In React 16 a new algoritham to update the dom came out the new algoritham is known as react fiber
- React fiber is a new way of finding the diff and updating the DOM.
- object representation of the html element by js is virtual dom

## Monolith and Microservises

- In monolith all the things such as backend serives, UI servies, authentication servies ect. in one project.
  So if there is some change in anything the whole app need to be deployed.

- In microservises all these are different projects. and all these projects togather form the app.
- And this is known as separation of concerns and follows single responsibility priciple where
  each and every servies has it's own job.
- our project now a UI microservise

- All the servieses run their own specific ports.
- All these ports can be mapped to domain main.

- There are two ways to fetch the data.

  - As soon as our page loads we can make an api call, and when we get the data we can render it on the UI.
  - The second approch is as soon as the page loads we will render our UI,

  1. loads ==> API ==> Render
  2. loads ==> Render ==> API ==> Render with new data

- second method is the better approch, and it gives the better UX

- The render cycles of react are very fast.

- A hook is nothing but a normal javascript function which react gives to us, it has it's own specific use cases.

- Our browsers block us to call api from one origin to different origin.

- CORS chrome extension

- Shimmer UI

  - It is kind of like we load fake page until we get actual data from the api

- Why we use state variable?

  - Javascript variables will be updated, but it won't refresh the component, and the UI will not be updated.
  - If we want something to be change in the component we use state vaiable. It will update the UI. It will rerender the component.

- rendering

  - call the function

- re-rendering

  - call the function once again

- State react variable
  - Whenever state variables update, react triggers a reconciliation cycle(re-renders the component)
  - When re-rendering react is finding fifference of old virtual dom and new virtual dom

# useEffect

- useEffect is basically called after every render of the component.
- but since we put dependancy array it changes the behavior of the render.
- If we put no dependancy array it will render every time when the component render.
- If the dependancy array is empty, then useEffect is called on only initial render.
- If we put something on the dependancy array, it is only called when the dependancy changes.

## React router dom

- where ever we have to use routes, we have to create a routing configuration
- import { createBrowserRouter } from "react-router-dom";
- createBrowserRouter will create a routing configuration for us.
- creating routing configuration inside our app router:- we are developing a router and we will be passing this configuration inside the createBrowserRouter.
- Configuration means that some information that will descide what will happen on a specific route
  - an information that will tell the browser router that what will happen on a specific path.
- createBrowserRouter take a list of paths

- RouterProvider

  - RouterProvider will provide our routing configuration to the app

- React router dom gives as access to an important hook useRouterError
- It gives more information about the error

- children routers

- Never use anger tags in react, It will reload the whole page
- use Link component from react-router-dom
- it works exactly like anger tags

## Routing

- There are two types of routing that we can have in our web application.

  - 1. Client side routing
    - not making any network call
  - 2. Server side routing
    - we make a network call and the page is coming from server

- Single page application

  - It is one page and only the components getting rendered.

- Dynamic routing

  - `:` tells that that part is dynamic

- Never update state variable directly

## React class components

- component did mount

  - run when after the component is rendereds

- life cycle method of react class component

  - parent constructor
  - parent render

    - child1 constructor
    - child1 render

    - child2 constructor
    - child2 render

    - child3 constructor
    - child3 render

  <DOM UPDATED - IN SINGLE BATCH>

  - child1 component did mount
  - child2 component did mount
  - child3 component did mount

  - parent component did mount

- Componenet did mount is used to make an API call

- https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/
- updating dom is the most expencing thing.
- so react try to batch up all the child rendering

- Mounting life cycle

  - Constructior(dummy)
  - Render(dummy)
    - <HTML dummy >
  - Component Did Moung
    <API Call>
    <this.setState> -> State variable is updated

- Update life cycle

  - render(API data)
    <HTML (new API data)>
  - Component did update

- ComponentWillUnmount

- Never compare react life cycles method with fuctional component

# Single resposibility principle

- Each of the component should have a single responsibility
- maintaining the code in a modular fashion
- modularity

  - break down the code into different different small small modules, so that the code becomes more maintainable and more testable

- costom hooks
  - hooks are like utility functions

# Chunking

# Code Spliting

# Dynamic Bundling

# Lazy Loading

# Ondemand Loading

# dynamic import

## Css frame works

##SASS & SCSS
##Styled-components
##Materal ui
##Bootsrap
##Chakra ui
##ant design

## tailwindcss

- rapidly build modern websites without ever leaving html.

## Higher order components

- Higher order component is the one take a component as input and returns a enhanced component

  # React dev tools chrome extension

# useContext

- to avoid props drilling

## Redux

- Redux is not mandaratory
- React and Redux are different libraries
- Zustand is another library like redux
- Redux is Mainly used to manage the state of our application
- When we use redux our application would become easier to debugg

- A prodicatble state container for JS apps

# RTK Redux Tool Kit

- Redux took kit store is kind of like a big javascript object with a lot of data inside it and it is kept in a global central place

- slices

  - Small portions of the redux tool
  - we make logical partitions and they are slices
  - when click on a particular button it dispatches an action
  - then it calls a function
  - the fuction internaly modifies the card(slice).
  - the function is known as reducer.
  - when hit on the add button it dispaches an action which calles a reducer fuction which updtes the slice the redux store.

- Read Data

  - selector
  - ude a selector and the selector will give data

- Subscribing to the store
  - it is sync with the store
  - suscribing is used by selector

# Redux steps

- Install @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Slice (cartSlice)
- dispatch(action)
- Selector

- reducer is a combination of small reducers

# Types of testing(developer)

- unit testing
- integration testing
- end to end testing - e2e testing

- unit testing
  - test react component in isolation
- integration testing

  - testing the integration of the component

- end to end testing
  - all the flows in the application
  - it requires need lots of tools

# React testing library

- jest javascript testing library

# seting up testing inour app

- install react testing library
- install jset
- install Babel dependencies
- configure Babel
- configure parcel config file to disable default babel transpilation
- jest configuration
  - npx jest --init
- install jsdom library(if jest version is greater than 28)
- install @babel/preset-react to make JSX work in jest cases
- add it to babel config file
- install @testing-library/jest-dom

`_ _` = dunder tests

- `it` and `test` are same thing
- if there is fetch function or state updates in the testing component, then wrap the render function inside `act` fuction which comes from react-dom/test-utils

# helper functions in test

- beforeAll(() => {});
- beforeEach(() => {});
- afterAll(() => {});
- afterEach(() => {});
