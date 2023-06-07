import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./pages/Login";
import Todos from "./pages/Todos";
import SignUp from "./pages/SignUp";
import Main from "./pages/Home";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
