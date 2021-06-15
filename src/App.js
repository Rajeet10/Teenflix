/* eslint-disable react/jsx-no-undef */
import React, { Component } from 'react';
import './App.css';
import Header from './components/Header/Header';
import NavigationBar from './components/MainNav';
import { BrowserRouter, Switch,Route } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies';
import Search from './Pages/Search/Search';
import Series from './Pages/Series/Series'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Header />
        <div className="app">
           <Container>
             <Switch>
               <Route path="/" component={Trending} exact></Route>
               <Route path="/movies" component={Movies}></Route>
               <Route path="/series" component={Series}></Route>
               <Route path="/search" component={Search}></Route>
             </Switch>
           </Container>

        </div>
        <NavigationBar />



      </BrowserRouter>

    )
  }

}

export default App;
