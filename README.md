# namaste React

# Parcel

# Dev Build

# local server

# HMR = Hot module replacement

# file watching algorithm written in c++

# caching faster builds

# image optimisation

# Minification : minimise the code spaces

# bundling

# compressing

# consistent hashing

# code splitting

# Differential Bundling : support older browsers

# Diagnostic

# Error handling

# HTTPS


import React from 'react';
import ReactDOM from 'react-dom/client';

// React Element 
// const heading = React.createElement("h1",{id:"heading"},"I am h1 tag");
// console.log(heading);

 //JSX (Transpiled before it reaches the JS) babel 
// jSX=> Raect.createElement=> ReactElement-JSObject=>HTMLElement (render)

// const elem = <span>React ELement</span>;
const Title =()=>(<h1 className="heading" tabIndex="5"> 
Namaste react using JSX 
</h1>)

const number=10000;
//React Functional component 
const HeadingComponent =()=>(
    <div id="container">
       {Title()}; 
       <Title/>;
       <Title></Title>
         <h1 className="heading" >Namaste React Functional component</h1>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<HeadingComponent/>);


