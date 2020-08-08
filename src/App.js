import React, { Component } from 'react';
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Main from './components/main/main'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Showroom from './components/showroom/showroom';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <div className="container">
          <Header />
          <Main />
          <Footer />
        </div>
        </Route>
        <Route path="/showroom" component={Showroom} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
