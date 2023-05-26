import React from 'react';
import { Link, Route } from 'react-router-dom';

import { commonRoutes, postingsRoutes } from '..';

export default function Home() {
  return (
    <Route exact path={commonRoutes.home?.path}>
      <Link to={postingsRoutes.root?.path}>Postings</Link>
    </Route>
  );
}
