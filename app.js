/* <div id="parent">
        <div id="child">
            <h1>I am H1 tag </h1>
            <h2>I am h2 tag </h2>
        </div>   
   </div> */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h1 tag"),
    React.createElement("h2", {}, "I am h2 tag"),
  ]),
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "I am h3 tag"),
    React.createElement("h2", {}, "I am h4 tag"),
  ]),
]);

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
