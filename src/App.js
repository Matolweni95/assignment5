import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Link } from 'react-router-dom';
import Home from './components/js/Home';
import Questionnaire from './components/js/Questionnaire';
import Create from './components/js/Create';
import SigninForm from './components/js/SignIn';
import SignupForm from './components/js/Signup';
import Attempt from './components/js/Attempt';
import Analytics from './components/js/Analytics';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<SigninForm />} exact={true} />
          <Route path='/questionnaire' element={<Questionnaire />} />
          <Route path='/create' element={<Create />} />
          <Route path='/dashboard' element={<Home />} />
          <Route path='/signup' element={<SignupForm />} />
          <Route path='/attempt' element={<Attempt />} />
          <Route path='/analytics' element={<Analytics />} />
          
        </Routes>  
    </BrowserRouter>
  );
}

export default App;