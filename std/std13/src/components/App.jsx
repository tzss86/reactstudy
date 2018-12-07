import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './ui/Menu';
import { Scenics } from './containers';

const App = () => (
  <div className="content">
    <Route component={Menu} />
    <Switch>
      <Route exact path="/" component={Scenics} />
      <Route path="/sort/:sort" component={Scenics} />
    </Switch>
  </div>
);

export default App;
