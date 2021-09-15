import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Resume from './Resume';

const Main = () => {
  return (
    <Switch> {/* The Switch decides which component to show based on the current URL.*/}
      <Route exact path='/Resume' component={Resume}></Route>
    </Switch>
  
  );
}

export default Main;