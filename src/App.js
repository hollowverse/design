/**
 * Entry point of the App
 */
import React from 'react';
import { defaultsDeep } from 'lodash';

import { paths, eventTypes } from './constants';
import * as Containers from './containers';
import { Provider, defaultState, createActions } from './state';

import './shared/styles/index.css';

/* eslint-disable */
(function(d, s, id) {
  var js,
    fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s);
  js.id = id;
  js.src = '//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.10';
  fjs.parentNode.insertBefore(js, fjs);
})(document, 'script', 'facebook-jssdk');
/* eslint-enable */

export default class App extends React.Component {
  static defaultProps = defaultState;

  static getDerivedStateFromProps(props, state) {
    return defaultsDeep(state, props);
  }

  actions = createActions(this.setState.bind(this));

  renderPath = () => {
    const { path } = this.state;

    if (path === '/') {
      return <Containers.Home />;
    } else if (path === '/person') {
      return <Containers.NotablePerson />;
    }

    return '🕷🐛🐜🐞';
  };

  render() {
    return (
      <Provider
        value={{
          actions: this.actions,
          state: this.state,
        }}
      >
        {this.renderPath()}
      </Provider>
    );
  }
}
