import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from "./componets/signin"
import SuperSignIn from './componets/superadmin/super_signin';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/super" element={<SuperSignIn />} />
      </Routes>
    </Router>
  );
}


export default App;
