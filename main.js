import React, { Fragment } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';

import components from './components/bundles';
import AsyncComponentLoader from './components/AsyncComponentLoader';

const renderAsyncComponent = (componentLoader) =>
  ({ ...props }) =>
    <AsyncComponentLoader componentLoader={componentLoader} { ...props } />;

const Root = () => (
  <BrowserRouter>
    <Fragment>
      <h1>Hello test</h1>
      <nav>
        <ul>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='/search'>Search</Link></li>
          <li><Link to='/account'>Account</Link></li>
        </ul>
      </nav>
      <main>
        <Switch>
          <Route path='/' exact render={renderAsyncComponent(components.HomePage)} />
          <Route path='/category/:slug' exact render={renderAsyncComponent(components.CategoryPage)} />
          <Route path='/product/:slug' exact render={renderAsyncComponent(components.ProductPage)} />
          <Route path='/checkout' exact render={renderAsyncComponent(components.CheckoutPage)} />
          <Route path='/search' exact render={renderAsyncComponent(components.SearchPage)} />
          <Route path='/account' exact render={renderAsyncComponent(components.AccountPage)} />
        </Switch>
      </main>
    </Fragment>
  </BrowserRouter>
);

render(<Root />, document.getElementById('app'));
