import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { postingsRoutes as routes } from '..';

export default function Postings() {
  return (
    <Switch>
      {Object.values(routes).map(({ component, path }, index) => (
        <Route
          key={`postings-${index}`}
          exact
          path={path}
          render={(props: any) => React.createElement(component, props)}
        />
      ))}
    </Switch>
  );
}
