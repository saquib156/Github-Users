import './App.css';
import Home from './components/Home';
import UserDetails from './components/UserDetails';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/user/:id" component={UserDetails} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;
