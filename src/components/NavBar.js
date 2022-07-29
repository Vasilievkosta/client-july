import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { Context } from '../index';
import { useNavigate } from 'react-router-dom';

const NavBar = observer(() => {
    const { user } = useContext(Context);
    const navigate = useNavigate();

    const logOut = () => {
        user.setUser({});
        user.setIsAuth(false);
    }

    return (
        <div className='navbar'>
            <NavLink to={'/'}>Clockwise</NavLink>

            {
                user.isAuth ?
                    <ul className='navbar__list'>
                        <li className='navbar__item'>
                            <button className='navbar__link' onClick={() => navigate('/admin')}>Админ панель</button>
                        </li>
                        <li className='navbar__item'>
                            <button className='navbar__link' onClick={() => logOut()}>Выйти</button>
                        </li>

                    </ul>
                    :
                    <ul className='navbar__list'>
                        <li className='navbar__item'>
                            <button className='navbar__link' onClick={() => navigate('/login')}>Авторизация</button>
                        </li>
                    </ul>
            }

        </div >
    );
})

export default NavBar;