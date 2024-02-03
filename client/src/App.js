import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from "./componets/signin"
import SuperSignIn from './componets/superadmin/super_signin';
import SuperHome from "./componets/superadmin/home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/super" element={<SuperSignIn />} />
        <Route path="/super_home" element={<SuperHome />} />
      </Routes>
    </Router>
  );
}


export default App;
