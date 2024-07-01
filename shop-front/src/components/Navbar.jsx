import { useDispatch, useSelector } from "react-redux";
import logo from "../logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { Role } from "../model/Role";
import { clearCurrentUser } from "../store/actions/user";

const Navbar = () => {
  const currentUser = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logout = () => {
    dispatch(clearCurrentUser());
    navigate("/login");
  };

  return (
    <nav className="navbar navbar-expand navbar-dark bg-dark">
      <NavLink to="/" href="#" className="navbar-brand ms-1">
        <img src={logo} className="App-logo" alt="logo" />
        React
      </NavLink>
      <div className="navbar-nav me-auto">
        {currentUser?.role === Role.ADMIN && (
          <li className="nav-item">
            <NavLink to="/admin" href="##" className="nav-link">
              관리자
            </NavLink>
          </li>
        )}
        <li className="nav-item">
          <NavLink to="/home" href="##" className="nav-link">
            홈페이지
          </NavLink>
        </li>
      </div>
      {!currentUser && (
        <div className="navbar-nav ms-auto me-5">
          <li className="nav-item">
            <NavLink to="/login" href="##" className="nav-link">
              로그인
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/register" href="##" className="nav-link">
              가입하기
            </NavLink>
          </li>
        </div>
      )}
      {currentUser && (
        <div className="navbar-nav ms-auto me-5">
          <li className="nav-item">
            <NavLink to="/profile" className="nav-link">
            {/* 로그인 했을때 username을 보여줌 */}
              {currentUser.username}
            </NavLink>
          </li>
          <li className="nav-item">
            <a href="##" className="nav-link" onClick={logout}>
              로그아웃
            </a>
          </li>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
