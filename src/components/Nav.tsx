import { Link } from "react-router-dom";

function Nav() {
  return (
    <>
      <Link to="/">홈</Link>
      <Link to="/signin">로그인</Link>
      <Link to="/signup">회원가입</Link>
    </>
  );
}

export default Nav;
