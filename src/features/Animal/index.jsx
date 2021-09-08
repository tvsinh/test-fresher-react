import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
// import DetailPage from './pages/DetailPage';
import ListPage from './pages/ListPage';

AnimalFeature.propTypes = {};

function AnimalFeature(props) {
  const match = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route path={match.url} exact component={ListPage} />
        {/* <Route path={`${match.url}/:animalId`} component={DetailPage} /> */}
      </Switch>
    </div>
  );
}

export default AnimalFeature;
