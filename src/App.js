import logo from './logo.svg';
import './App.css';
import Sidebar from './Sidebar';
import Topbar from './Topbar';
import Dashboard from './Dashboard';
import "./sb-admin-2.min.css";
import UserList from './UserList';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from './Login';
import Portal from './Portal';
import Createuser from './Createuser';
import Userview from './Userview';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/portal" element={<Portal />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="userlist" element={<UserList />} />
          <Route path="Createuser" element={<Createuser />} />
          <Route path="userview/:id" element={<Userview />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
