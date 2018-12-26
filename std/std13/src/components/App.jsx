import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './ui/Menu';
import { Scenics, Scenic } from './containers';

const App = () => (
  <Switch>
  	<Route exact path="/:id" component={Scenic} />
  	<Route path="/" component={()=>(
  		<div className="content">
		    <Route component={Menu} />
		    <Switch>
		      <Route exact path="/" component={Scenics} />
		      <Route path="/sort/:sort" component={Scenics} />
		    </Switch>
		  </div>)} />
  </Switch>
);

export default App;
