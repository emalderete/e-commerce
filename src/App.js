import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import RecoverPassword from './Pages/RecoverPassword';
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
