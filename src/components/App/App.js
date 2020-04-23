import React from 'react';
import { withTranslation } from 'react-i18next';
import Form from '../Form/Form';

class App extends React.Component {
  render() {
    return (
      <Form />
    );
  }
}

export default withTranslation()(App);
