import logo from './logo.svg';
import './App.css';
import Nav from './components/nav/nav';
import Header from './components/header/header';
import Row from './components/row/row';
import Home from './components/Home';
import Login from './login/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App() {
  return (
    // <div className="app">
    
    //   <Nav/>
  
    //   <Header/>
    //   <Row title='Netflix Originals' movieType='netflix-originals' />
    //   <Row title='Trending Now' movieType='trending-now' />
    //   <Row title='Top Rated' movieType='top-rated' />
    //   <Row title='Action Movies' movieType='action-movies' />
    //   <Row title='Horror Movies' movieType='horror-movies' />
    //   <Row title='Romance Movies' movieType='romance-movies' />
    //   <Row title='Documentaries Movies' movieType='documentaries-movies' />
    // </div>
    <Router>
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
          <Login />
        </Route>
    </Switch>
  </Router>
  );
}

export default App;
