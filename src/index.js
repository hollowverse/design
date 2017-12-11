/**
 * Entry point of the App
 */
import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { paths, eventTypes } from './constants';
import { App, Events, Home, NotablePerson, Search } from './containers';
import './shared/styles/index.css';

/* eslint-disable */
(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
/* eslint-enable */

const RouteEvents = ({ type, ...rest }) =>
  <Route
    {...rest}
    render={() =>
      <App
        screen={Events}
        screenProps={{ type }}
        backPath={paths.NOTABLE_PERSON}
      />
    }
  />;

render(
  <Router>
    <Switch>
      <RouteEvents path={paths.EVENTS_APPEARANCES} type={eventTypes.APPEARANCE} />
      <RouteEvents path={paths.EVENTS_DONATIONS} type={eventTypes.DONATION} />
      <RouteEvents path={paths.EVENTS_QUOTES} type={eventTypes.QUOTE} />
      <Route path={paths.NOTABLE_PERSON} render={() => <App screen={NotablePerson} />} />
      <Route path={paths.SEARCH} render={() => <App screen={Search} />} />
      <Route path={paths.HOME} render={() => <App screen={Home} />} />
      <Redirect to={paths.HOME} />
    </Switch>
  </Router>,
  document.getElementById('hv-root'),
);
