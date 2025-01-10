import { useState } from 'react';
import imgLogin from '../../assets/img/ResetImg.png'
import '../../assets/styles/tokens.css'
import './ResetPassword.module.css'
import RoundedInput from '../../components/FormInput/RoundedInput';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';

function ResetPassword() {
  return (
    <>
      <Header />
      <div className="Login-container">
        <div className="Login-content">
          <h1>Changez de mot de passe</h1>
          <form>
            <RoundedInput label={"Ancien mot de passe"} type={"text"} placeholder={"Ancien mot de passe"} isPassword={false} />
            <div className="Password-wrapper">
              <RoundedInput label={"Nouveau mot de passe"} type={"password"} placeholder={"Mot de passe"} isPassword={true} />
            </div>
            <Button children={"Modifier"} size={"slim"} />
          </form>
        </div>
        <img src={imgLogin} alt="Background" />

      </div>
    </>
  );
}



export default ResetPassword;