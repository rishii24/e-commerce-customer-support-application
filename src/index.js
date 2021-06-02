import { ColorModeScript } from '@chakra-ui/react';
import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <StrictMode>
    <ColorModeScript />
    <App />
  </StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();

reportWebVitals();
