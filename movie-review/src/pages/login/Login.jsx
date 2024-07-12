import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";

import { faDove, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { setCurrentUser } from "../../store/actions/user"
import User from "../../models/User";
import { loginService } from "../../Services/auth.service";


const Login = () => {

    const [user, setUser] = useState(new User('', '', ''));
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
  
    const currentUser = useSelector((state) => state.user);
    const navigate = useNavigate();
  
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (currentUser?.id) navigate('/profile');
    }, []);
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      console.log(name, value);
      setUser((prevState) => {
        return {
          ...prevState,
          [name]: value,
        }
      })
    }
  
    const handleLogin = (e) => {
      e.preventDefault();
      setSubmitted(true);
  
      if (!user.username || !user.password) {
        return;
      }
  
      setLoading(true);
  
      loginService(user)
        .then((response) => {
          dispatch(setCurrentUser(response.data));
          navigate('/profile');
        })
        .catch((error) => {
          console.log(error);
          setErrorMessage('유저네임 또는 패스워드가 틀립니다.');
          setLoading(false);
        })
  
      setLoading(false);
    }
  
    // const Navbar = () => {
    //   const currentUser = useSelector((state) => state.user);
  
    //   const dispatch = useDispatch();
    //   const navigate = useNavigate();
  
    //   const logout = () => {
    //     dispatch(clearCurrentUser());
    //     navigate('/login');
    //   };
    // }
  
    return (
      <div className='container mt-5'>
        <div className='card ms-auto me-auto p-3 shadow-lg custom-card'>
          <FontAwesomeIcon icon={faUserCircle} className='ms-auto me-auto user-icon' />
  
          {errorMessage && <div className="alert alert-danger">{errorMessage}</div>}
  
          <form onSubmit={handleLogin}
            noValidate className={submitted ? 'was-validated' : ''}>
  
            <div className='form-group my-2'>
              <label htmlFor='username'>유저이름</label>
              <input
                type='text'
                name='username'
                className='form-control'
                placeholder='username'
                value={user.username}
                onChange={handleChange}
                required />
              <div className='invalid-feedback'>유저네임을 입력해주세요</div>
            </div>
  
            <div className='form-group my-2'>
              <label htmlFor='password'>비밀번호</label>
              <input
                type='password'
                name='password'
                className='form-control'
                placeholder='password'
                value={user.password}
                onChange={handleChange}
                required />
              <div className='invalid-feedback'>패스워드를 입력해주세요</div>
            </div>
  
            <button className='btn btn-info text-white w-100 mt-3' disabled={loading}>
              로그인
            </button>
          </form>
  
          <Link to='/register' className='btn btn-link' style={{ color: 'darkgrey ' }}>
            새 계정 만들기
          </Link>
        </div>
      </div>
  
    )
  }
export default Login;
