import React, { Suspense } from 'react';

import {
  Route,
  Switch,
  Header,
  Home,
  LoginPage,
  RegisterPage,
  ErrorPage,
  Detail,
  SearchResults,
  GifsContextProvider,
  UserContextProvider,
  routes
} from 'util/imports';

import 'styles.css';

export default function App() {
  return (
    <UserContextProvider>
      <div className="App">
        <Suspense fallback={null}>
          <section className="App-content">
            <Header />
            <GifsContextProvider>
              <Switch>
                <Route path={routes.home} component={Home} />
                <Route
                  path={routes.search}
                  component={SearchResults}
                />
                <Route path={routes.gif} component={Detail} />
                <Route path={routes.login} component={LoginPage} />
                <Route path={routes.register} component={RegisterPage} />
                <Route path={routes.error} component={ErrorPage} />
              </Switch>
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  );
}
