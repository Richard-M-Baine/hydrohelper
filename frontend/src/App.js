// frontend/src/App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GetPhAll from './components/GetPHAll';

function App() {
  return (
    <Switch>
      <Route path="/blah">
        <GetPhAll />
      </Route>
       
    </Switch>
  );
}

export default App;