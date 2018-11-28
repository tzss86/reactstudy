import { Menu, NewColor, Colors } from './containers';
import '../../css/APP.scss';

const App = () =>
    <div className="app">
        <Menu />
        <NewColor />
        <Colors />
    </div>

export default App;