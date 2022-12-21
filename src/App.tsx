import React from 'react';
import  GlobalStyle  from './static/styles/global';
import { Home } from './pages/Home'
import './static/styles/styles.scss';
 
function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Home />
    </div>
  );
}

export default App;
