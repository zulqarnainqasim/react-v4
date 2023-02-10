const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),

    React.createElement("h2", {}, props.breed),
  ]);
};
class App extends React.Component {
  handleTitleClick() {
    alert("You Clicked the title");
  }
  render() {
    return React.createElement("div", {}, [
      React.createElement(
        "h1",
        { onClick: this.handleTitleClick },
        "Adopt Me!"
      ),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese",
      }),
      React.createElement(Pet, {
        name: "bepper",
        animal: "bird",
        breed: "cocktiel",
      }),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanese",
      }),
    ]);
  }
}
// const App = () => {

// };
ReactDOM.render(React.createElement(App), document.getElementById("root"));
