import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import User from "../../model/User";
import { useSelector } from "react-redux";
import { registerService } from "../../Services/auth.service";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import "./Register.css"

const Register = () => {
    const [user, setUser] = useState(new User('', '', ''));
    const [loading, setLoading] = useState(false);
    const [submitted, setSubmitted] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const currentUser = useSelector((state) => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (currentUser?.id) {
            navigate('/profile');
        }
    }, []);

    const handleChange = (e) => {
        e.preventDefault();
        setSubmitted(true);

        if (!user.username || !user.password || !user.name) {
            return;
        }

        setLoading(true);

        registerService(user)
        .then((ok) => {
            navigate("/login")
        })
        .catch((error) => {
            console.log(error);
            if (error?.response?.status ===409) {
                setErrorMessage("아이디 또는 비밀번호가 틀립니다.");
            } else {
                setErrorMessage("예상하지 못한 에러가 발생했습니다.")
            }
            setLoading(false);
        });

        // const{ name, value } = e.target;
        // console.log(name, value);
        // setUser((prevState) => {
        //     return {
        //         ...prevState,
        //         [name]: value
    //         }
    //     })
    }
}

export default Register;