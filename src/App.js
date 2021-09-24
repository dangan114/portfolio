import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './components/Home';

function App() {

  const MainContainer = styled.div`
    font-family: 'Andale Mono, monospace';
    height: 100%;
    width: 100%;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
    @media (max-width: 768px) {
      width: 768px;
    }
  `

  useEffect(() => {
    document.addEventListener("touchstart", function() {},false);
  }, []);

  return (
    <MainContainer>
       <Router>
        <Switch>
        <Route path='/' exact component={Home} />
      </Switch>
    </Router>
    </MainContainer>
  );
}

export default App;
