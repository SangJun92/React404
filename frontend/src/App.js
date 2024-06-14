import logo from "./logo.svg";
import "./App.css";
import Navbar from "./layout/Navbar";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./pages/Home";
import AddUser from "./users/AddUser";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import EditUser from "./users/EditUser";
import ViewUser from "./users/ViewUser";
import NavbarBoard from "./layout/NavbarBoard";
import Main from "./pages/Main";
import AddBoard from "./board/AddBoard";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/adduser" element={<AddUser />} />
          <Route path="/edituser/:id" element={<EditUser />} />
          <Route path="/viewuser/:id" element={<ViewUser />} />
        </Routes>

        <NavbarBoard />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/addboard" element={<AddBoard />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
