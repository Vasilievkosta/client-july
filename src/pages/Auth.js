import { observer } from 'mobx-react-lite';
import React, { useContext, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Context } from '../index';
import { login, registration } from '../http/userAPI';

const Auth = observer(() => {
    const { user } = useContext(Context)
    const location = useLocation();
    const navigate = useNavigate();
    const isLogin = location.pathname === '/login';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            console.log({ data })
            user.setUser(user);
            user.setIsAuth(true);
            navigate('/about')
        } catch (e) {
            alert(e.response.data.message)
        }
    }



    return (
        <div className="auth" >
            <h2 className="auth__title">{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
            <form>
                <input className="auth__input" placeholder='Введите ваш email...' type='text' value={email} onChange={e => setEmail(e.target.value)} />
                <p></p>
                <input className="auth__input" placeholder='Введите ваш пароль...' type='password' value={password} onChange={e => setPassword(e.target.value)} />

                <br />
                <button className="auth__btn" type='button' onClick={click}>{isLogin ? 'Войти' : 'Регистрация'} </button>
                <div>
                    {isLogin ?
                        <p className="auth__acc">
                            Нет аккаунта? <NavLink className='auth__link' to={'/registration'}>Зарегистрируйся</NavLink>
                        </p>
                        :
                        <p className="auth__acc">
                            Есть аккаунт? <NavLink className='auth__link' to={'/login'}>Войдите</NavLink>
                        </p>
                    }
                </div>
            </form>
        </div >
    );
})

export default Auth;
