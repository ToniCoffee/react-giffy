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
  UserContextProvider
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
                <Route path="/" component={Home} />
                <Route
                  path="/search/:keyword/:rating?"
                  component={SearchResults}
                />
                <Route path="/gif/:id" component={Detail} />
                <Route path="/login" component={LoginPage} />
                <Route path="/register" component={RegisterPage} />
                <Route path="/:rest*" component={ErrorPage} />
              </Switch>
            </GifsContextProvider>
          </section>
        </Suspense>
      </div>
    </UserContextProvider>
  );
}
