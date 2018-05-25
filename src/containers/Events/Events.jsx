/**
 * Events Container
 */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { eventTypes } from '../../constants/eventTypes';
import * as data from '../../constants/tempData';
import * as paths from '../../constants/paths';
import { App } from '../../components/App/App';
import { Loader } from '../../components/Loader/Loader';
import { EventGroup } from '../../components/EventGroup/EventGroup';

export class Events extends Component {
  static propTypes = {
    type: PropTypes.oneOf([
      eventTypes.APPEARANCE,
      eventTypes.DONATION,
      eventTypes.QUOTE,
    ]).isRequired,
  };

  state = {
    isLoading: true,
  };

  componentDidMount() {
    window.scrollTo(0, 0);
    window.document.title = 'Events | Hollowverse';
    this.loadingTimeout = setTimeout(
      this.handleLoaded,
      Math.random() * 1000 + 100,
    );
  }

  componentWillUnmount() {
    clearTimeout(this.loadingTimeout);
  }

  handleLoaded = () => this.setState({ isLoading: false });

  render() {
    const { type } = this.props;

    let events = data.QUOTES;
    if (type === eventTypes.APPEARANCE) {
      events = data.APPEARANCES;
    } else if (type === eventTypes.DONATION) {
      events = data.DONATIONS;
    }

    return (
      <App
        searchValue={data.NOTABLE_PERSON.name}
        backLink={paths.NOTABLE_PERSON}
      >
        {this.state.isLoading ? (
          <Loader />
        ) : (
          <EventGroup
            person={data.NOTABLE_PERSON}
            type={type}
            events={events}
          />
        )}
      </App>
    );
  }
}
