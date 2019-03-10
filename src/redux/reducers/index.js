import { combineReducers } from 'redux-immutable';
import { connectRouter } from 'connected-react-router/immutable';

const createRootReducer = ({ history }) =>
  combineReducers({
    router: connectRouter(history),
  });

export default createRootReducer;
