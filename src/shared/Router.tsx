import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Todos from "../pages/TodoList";
import SignUp from "../pages/SignUp";
import Home from "../pages/Main";
import Nav from "../components/Nav";

function Router() {
  
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todo" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
