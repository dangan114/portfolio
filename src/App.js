import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Home from './components/Home';

function App() {

  const MainContainer = styled.div`
    font-family: 'Andale Mono, monospace';
    height: 100%;
    width: 100%;
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
