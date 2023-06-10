import { Link, useNavigate } from "react-router-dom";

function Main() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>프리온보딩 사전과제</h1>
      <button onClick={() => navigate("/todo")}>
        <Link to="/todo">Getting Start</Link>
      </button>
    </div>
  );
}

export default Main;
