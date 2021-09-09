import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

AnimalFeature.propTypes = {};

function AnimalFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} exact>
          <ListPage />
        </Route>
        <Route path={`${match.url}/:animalId`}>
          <DetailPage />
        </Route>
      </Switch>
    </div>
  );
}

export default AnimalFeature;
