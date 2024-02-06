import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import SignIn from "./componets/signin"
import SuperSignIn from './componets/superadmin/super_signin';
import SuperHome from "./componets/superadmin/home"
import AdminHome from "./componets/admin/home"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/super" element={<SuperSignIn />} />
        <Route path="/super_home" element={<SuperHome />} />
        <Route path="/admin_home" element={<AdminHome />} />
      </Routes>
    </Router>
  );
}


export default App;
