import AnimalFeature from 'features/Animal';
import Login from 'features/Auth/components/Login';
import { Redirect, Route, Switch } from 'react-router';
import './App.css';

function App({ Component, pageProps }) {
  return (
    <div className="app">
      <Switch>
        <Redirect from="/" to="/login" exact />
        <Route path="/login" component={Login} />
        <Route path="/animal" component={AnimalFeature} />
      </Switch>
    </div>
    // <AuthContext.Provider value={accessToken}>
    //   <Component {...pageProps} />
    // </AuthContext.Provider>
  );
}

export default App;
