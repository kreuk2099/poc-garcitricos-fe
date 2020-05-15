import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { FaGoogle, FaTwitter } from 'react-icons/fa';
import Divider from '@material-ui/core/Divider';
import { FormControl, TextField } from '@material-ui/core';
import './styles.scss';
import background from './../../assets/static/limes.jpg';
import logo from './../../assets/static/garcitricos.png';
import { login } from './../../actions/index';
import { GlobalStateContext } from './../../context/GlobalStateContext';

const Login = (props) => {
  const [loginForm, setLogin] = useState({ user: '', password: '' });
  const [state, setState] = React.useContext(GlobalStateContext);

  const handleSubmit = (e) => {
    console.log(loginForm);

    e.preventDefault();
    setState(login(loginForm));
    props.history.push('/ventas');
  };
  const handleChange = (e) => {
    e.preventDefault();
    setLogin({ ...loginForm, [e.target.name]: e.target.value });
  };

  const style = {
    backgroundImage: `url(${background})`,
  };

  return (
    <section className='login__container' style={style}>
      {/* <figure className='login__background'>
        <img src={background} alt='limes background garcitricos' />
      </figure> */}
      <form className='login__form' onSubmit={handleSubmit}>
        <img className='login__logo' src={logo} alt='logo garcitricos' />
        <h2 className='login__title'>Inicia Sesión</h2>
        <input
          type='email'
          name='email'
          placeholder='correo'
          required={true}
          onChange={handleChange}
          value={loginForm.email}
        />
        <input
          type='password'
          name='password'
          placeholder='contraseña'
          required={true}
          onChange={handleChange}
          value={loginForm.password}
        />
        <div className='remember-me'>
          <label htmlFor='remember'>Recordar mi cuenta</label>
          <input type='checkbox' name='remember' id='remember' />
        </div>
        <button type='submit'>Ingresar</button>

        <Divider variant='fullWidth' />

        <span className='flex-center'>
          Ingresar con: &nbsp;
          <FaGoogle />
          &nbsp;&nbsp;
          <FaTwitter />
        </span>
        <Link to='/recover'>olivdé mi contraseña</Link>
      </form>
    </section>
  );
};
export default Login;