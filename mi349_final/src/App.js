import React from 'react';
import Banner from './components/Banner'
import Overview from './components/Overview'
import Compentencies from './components/Competencies'
import Projects from './components/Projects'
import Socials from './components/Socials'


function App() {
  return (
    <main style={{height:"100%"}}>
      <Banner />
      <Overview />
      <Compentencies />
      <Projects />
      <Socials />
    </main>
  )
}

export default App;
