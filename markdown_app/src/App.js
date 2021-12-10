import React, {useState} from 'react';
import '../node_modules/semantic-ui-css/semantic.min.css'
import './css/app.css'
import { Container, Grid } from 'semantic-ui-react'
import Editor from './components/editor/Editor'
import Previewer from './components/previewer/Previewer'


function App() {
  const [editorWidth] = useState(8)
  const [previewWidth] = useState(10)

  return (
    <Container as='main' id='main'>
      <Grid >
        <Grid.Row centered>
          <Grid.Column width={editorWidth}>
            <Editor />
          </Grid.Column>
        </Grid.Row>
        <Grid.Row centered>
          <Grid.Column width={previewWidth}>
            <Previewer />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  )
}

export default App;
