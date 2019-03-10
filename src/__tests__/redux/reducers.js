// Test Modules & Helpers
import { createMemoryHistory } from 'history';
import Immutable from 'immutable';

// Test Subject
import createRootReducer from '../../redux/reducers';

describe('Root Reducer tests', () => {
  describe('createRootReducer', () => {
    it('should be a function', () => {
      expect(createRootReducer).toBeInstanceOf(Function);
    });

    it('should throw an error when no history object is passed', () => {
      expect(() => {
        createRootReducer();
      }).toThrowError();
    });

    it('should return a reducer function', () => {
      const rootReducer = createRootReducer({ history: createMemoryHistory });
      expect(rootReducer).toBeInstanceOf(Function);
    });
  });

  describe('Root reducer', () => {
    let rootReducer;

    beforeEach(() => {
      rootReducer = createRootReducer({ history: createMemoryHistory });
    });

    it('should return an instance of Immutable.Map', () => {
      const state = rootReducer();
      expect(state).toBeInstanceOf(Immutable.Map);
    });
  });
});
