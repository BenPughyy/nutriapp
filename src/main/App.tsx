import { ReactElement } from 'react';
import { Provider } from 'react-redux';

// Store
import store from '../store/store';

import AppContainer from './AppContainer';
import Theme from './theme';

function App(): ReactElement {
  return (
    <Provider store={store}>
      <Theme>
        <AppContainer />
      </Theme>
    </Provider>
  );
}

export default App;
