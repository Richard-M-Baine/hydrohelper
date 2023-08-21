// frontend/src/App.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';

import GetPhAll from './components/GetPHAll';
import CreatePostHomePHForm from './components/PostHomePH'

function App() {
  return (
    <Switch>
      <Route path="/blah">
        <GetPhAll />
      </Route>

      <Route path="/">
        <CreatePostHomePHForm />
      </Route>
       
    </Switch>
  );
}

export default App;