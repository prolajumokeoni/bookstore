import Books from './components/Books';
import { Categories } from './components/Categories';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container">
      <Books />
      <Categories />
    </div>
  );
}

export default App;
