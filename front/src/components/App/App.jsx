import React, { Component } from 'react';

import { Dispatcher } from 'flux';
import Store from '../../Store';

import Header from '../frame/Header/Header';
import Container from '../frame/Container/Container';
import Side from '../frame/Side/Side';
import Middle from '../frame/Middle/Middle';
import Main from '../frame/Main/Main';

import styles from './App.css';
import themeDark from '../../styles/theme/dark.css';
import themeLight from '../../styles/theme/light.css';

const dispatcher = new Dispatcher();
const store = new Store(dispatcher);

class App extends Component {
  constructor(...args) {
    super(...args);

    this.theme = {
      dark: themeDark,
      light: themeLight
    };
  }

  componentWillMount() {
    this.state = store.getState();
  }

  render() {
    if (!this.state) {
      return <div className={styles.wrapper} />;
    }

    const themeName = this.state.theme;
    const theme = this.theme[themeName];

    return (
      <div className={`${styles.wrapper} ${theme.root}`}>
        <Header themeName={themeName} theme={theme} user={this.state.user} />

        <Container theme={theme}>
          <Side theme={theme} />
          <Middle theme={theme} />
          <Main theme={theme} />
        </Container>
      </div>
    );
  }
}

export default App;