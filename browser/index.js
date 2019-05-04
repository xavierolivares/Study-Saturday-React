import React from 'react'
import ReactDOM from 'react-dom'
import Main from './components/Main'
// we hook up our component to index.js with import 'component name'

console.log('Hello Webpack!');

ReactDOM.render(<Main />, document.getElementById('app'))

// once we run npm start, webpack grabs whatever is in brower/index.js and is rendering it to the virtual DOM to the html


