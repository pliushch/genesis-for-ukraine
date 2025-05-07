import React from 'react';
import 'src/assets/styles/index.scss';
import App from 'src/components/App';
import {HashRouter} from 'react-router-dom';
import {createRoot} from 'react-dom/client';

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <HashRouter>
    <App/>
  </HashRouter>
);
