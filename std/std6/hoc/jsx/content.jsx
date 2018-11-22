const PButton = Loader(Button);
const PLink = Loader(Link);
const PLogo = Loader(Logo);

class Content extends React.Component {
  render() {
    return (
      <div>
        <PButton />
        <br />
        <PLink />
        <br />
        <PLogo />
        <br />
        <iframe id="frame" src="" width="375" height="667"/>
      </div>
    )
  }
}