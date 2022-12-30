import { ReactElement } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

// Store
import store from '../store/store';

import AppContainer from './AppContainer';
import Theme from './theme';

function App(): ReactElement {
  return (
    <Provider store={store}>
      <Router>
        <Theme>
          <AppContainer />
        </Theme>
      </Router>
    </Provider>
  );
}

export default App;
