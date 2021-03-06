// Node Modules
import React, { Component } from 'react';
import Immutable from 'immutable';

// Components
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router/immutable';
import Routes from './routes';

// Redux
import configureStore, { history } from './redux/store';

class App extends Component {
  constructor(props) {
    super(props);

    const initialState = Immutable.Map();
    this.store = configureStore(initialState);
  }

  render() {
    return (
      <Provider store={this.store}>
        <ConnectedRouter history={history}>
          <Routes />
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default App;
