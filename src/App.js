import './App.css';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Vote from './pages/Vote';
// import Profile from './pages/Profile';
// import ContactUs from './pages/ContactUs';
// import LoginPage from './pages/LoginPage';


function App() {
  return (
    <Router>
      <Routes>
      {/* <Route path='/' element={ <LoginPage />} /> */}
      <Route path='/' element={ <Vote />} />
      {/* <Route path='/' element={ <ContactUs />} /> */}
    </Routes>
    </Router>
  );
}

export default App;
