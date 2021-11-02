import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import Books from './components/Books';
import Categories from './components/Categories';
import Header from './components/Header';
import NoMatch from './components/NoMatch';

const App = () => (
  <>
    <Header />
    <main className="bg-light min-vh-100 d-flex py-5">
      <div className="container-lg pt-5">
        <div className="row mx-0 justify-content-center pt-3">
          <div>
            <Switch>
              <Route exact path="/">
                <Books />
              </Route>
              <Route path="/categories">
                <Categories />
              </Route>
              <Route path="*">
                <NoMatch />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </main>
  </>
);

export default App;
