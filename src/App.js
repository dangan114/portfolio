import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './components/Home';

function App() {

  const MainContainer = styled.div`
    font-family: 'Andale Mono, monospace';
    height: 100vh;
    width: 100vw;
    @media (max-width: 768px) {
      width: 768px;
    }
  `

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
