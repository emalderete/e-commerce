import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import RecoverPassword from './Pages/RecoverPassword';
import PageNotFound from './Pages/PageNotFound';
import Contact from './Pages/Contact';
import SearchResults from './Pages/SearchResults';
import './App.css';
import './Responsive.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/recover' element={<RecoverPassword></RecoverPassword>}></Route>
          <Route path='/contact' element={<Contact></Contact>}></Route>
          <Route path='/results' element={<SearchResults></SearchResults>}></Route>
          <Route path='/*' element={<PageNotFound></PageNotFound>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
