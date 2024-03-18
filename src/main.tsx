import React from 'react';
import { Provider } from 'react-redux';
import { createCtx, connectLogger } from '@reatom/framework';
import { reatomContext } from '@reatom/npm-react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { store } from './redux-state/store.ts';

import './index.css';

const ctx = createCtx();
connectLogger(ctx);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <reatomContext.Provider value={ctx}>
      <Provider store={store}>
        <App />
      </Provider>
    </reatomContext.Provider>
  </React.StrictMode>
);
