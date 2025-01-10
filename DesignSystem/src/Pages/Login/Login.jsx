import { useState } from 'react';
import imgLogin from '../../assets/img/ImgLogin.png'
import '../../assets/styles/tokens.css'
import './Login.css'
import RoundedInput from '../../components/FormInput/RoundedInput';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import { Link } from 'react-router-dom';
function LoginPage() {
  return (
    <>
      <Header />
      <div className="Login-container">
        <img src={imgLogin} alt="Background" />
        <div className="Login-content">
          <h1>Connectez vous</h1>
          <form>
            <RoundedInput label={"Email"} type={"text"} placeholder={"Email"} isPassword={false} />
            <div className="Password-wrapper">
              <RoundedInput label={"Mot de passe"} type={"password"} placeholder={"Mot de passe"} isPassword={true} />
              <Link to={"/reset"}>
              <a href="" className="Forgot-password">Mot de passe oublié ?</a>
              </Link>
            </div>
            <Button children={"Connexion"} size={"slim"} />
          </form>
        </div>
      </div>
    </>
  );
}



export default LoginPage;