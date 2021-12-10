import React from 'react';
import QuoteBox from './components/QuoteBox/QuoteBox'
import 'semantic-ui-css/semantic.min.css'
import { Container } from 'semantic-ui-react'
import './app/css/app.css'
import { useSelector } from 'react-redux';

function App() {
  const globalColor =  useSelector(state => state.color)
  return (
    <Container as="main" id="main-container" style={{backgroundColor: globalColor}}>
      <QuoteBox />
    </Container>
  );
}


export default App;