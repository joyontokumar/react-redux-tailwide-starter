import 'bootstrap/dist/css/bootstrap.min.css';
import React, { ReactElement } from 'react';
import Routes from '../src/layouts/routes/routes';
import './assets/css/main.scss';
const App = (): ReactElement => {
  return (
    <React.Fragment>
      <Routes />
    </React.Fragment>
  );
};

export default App;
