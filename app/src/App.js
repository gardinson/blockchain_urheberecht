import React, { Component } from 'react';
import drizzleOptions from './drizzleOptions';
import {DrizzleProvider} from 'drizzle-react';
import { LoadingContainer } from 'drizzle-react-components';
import Nav from './Nav'
import Footer from './Footer'


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Container from './Container.js'

class App extends Component {
  render() {

    return (

      <div className="container">
        <Nav/>
      <DrizzleProvider options={drizzleOptions}>
        <LoadingContainer>
          <Container/>
        </LoadingContainer>
      </DrizzleProvider>
      <Footer/>
      </div>
    );
  }
}

export default App;
