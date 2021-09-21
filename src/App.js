import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Home from './components/Home';

function App() {
  return (
    <div style={{ fontFamily: 'Andale Mono, monospace', background: 'url(/background_forest.gif) no-repeat center center fixed', backgroundSize: 'cover', minWidth: '500px'}}>
       <Router>
        <Switch>
        <Route path='/' exact component={Home} />
        {/* <Route path='/about' component={About} />
        <Route path='/events' component={Events} />
        <Route path='/annual' component={AnnualReport} />
        <Route path='/team' component={Teams} />
        <Route path='/blogs' component={Blogs} />
        <Route path='/sign-up' component={SignUp} /> */}
      </Switch>
    </Router>
    </div>
  );
}

export default App;
