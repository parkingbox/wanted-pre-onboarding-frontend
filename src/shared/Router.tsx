import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "../pages/SignIn";
import Todos from "../pages/TodoList";
import SignUp from "../pages/SignUp";
import Home from "../pages/Home";

function Router() {
  return (
    <BrowserRouter>
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
