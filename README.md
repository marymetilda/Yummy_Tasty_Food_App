# Namasthe-React

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
