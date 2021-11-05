import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import BookList from './components/BookList';
import Categories from './components/Categories';
import Form from './components/Form';
import Header from './components/Header';
import NoMatch from './components/NoMatch';

const App = () => (
  <>
    <Header />
    <main className="bg-light min-vh-100 d-flex py-5">
      <div className="container-lg pt-3 pt-md-5">
        <div className="row mx-0 justify-content-center pt-3">
          <div>
            <Switch>
              <Route exact path="/">
                <BookList />
                <div className="h-line my-4" />
                <Form />
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
