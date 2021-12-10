import React from 'react';
import 'semantic-ui-css/semantic.min.css'
import './css/app.css'
import { AttachedMenu } from './components/attached-menu/app-pagination-bar'
import { Container } from 'semantic-ui-react'
import protoQuote from './Images/ProtoQuote.svg'

function App() {
  return (
      <Container as={'main'} id='main'>
        <Container as={'section'} id={'protoHeader'}>
          <img  id='protoQuote' src={protoQuote} alt='protoQuote' />
        </Container>
        <AttachedMenu id={'attachedMenu'} />
      </Container>
  );
}

export default App;