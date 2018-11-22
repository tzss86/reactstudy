const PButton = Loader(Button);
const PLink = Loader(Link);
const PLogo = Loader(Logo);

class Content extends React.Component {
  render() {
    return React.createElement(
      "div",
      null,
      React.createElement(PButton, null),
      React.createElement("br", null),
      React.createElement(PLink, null),
      React.createElement("br", null),
      React.createElement(PLogo, null),
      React.createElement("br", null),
      React.createElement("iframe", { id: "frame", src: "", width: "375", height: "667" })
    );
  }
}