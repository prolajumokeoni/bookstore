import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Books from './components/Books';
import Categories from './components/Categories';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
      <div className="container border shadow py-3 mt-3">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Books} />
          <Route exact path="/categories" component={Categories} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
