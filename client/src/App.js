import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Homepage from "./pages/Homepage";
import Navbar from "./components/Navbar";
import AddBlog from "./components/AddBlog";
import EditBlog from "./components/EditBlog";
import SingleBlog from "./components/SingleBlog";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} exact />
          <Route path="/:id" element={<EditBlog />} />
          <Route path="/add-blog" element={<AddBlog />} />
          {/* <Route path="/update-blog/:id" element={<EditBlog />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
