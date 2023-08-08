/* <div>
  <div>
    <h1>Iam h1</h1>
    <h2>Iam h2</h2>
  </div>
  <div>
    <h1>Iam h1</h1>
    <h2>Iam h2</h2>
  </div>
</div> */

const parentElement = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", {}, "Iam h1"),
    React.createElement("h2", {}, "Iam h2"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "Iam h1"),
    React.createElement("h2", {}, "Iam h2"),
  ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parentElement);
