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
      <Navbar />
      <Switch>
        <Route path="/books">
          <Books />
        </Route>
        <Route path="/categories">
          <Categories />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
