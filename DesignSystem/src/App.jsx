import React from 'react';
import EmailInput from './components/FormInput/EmailInput';

const App = () => {
  return (
    <div>
      <h1>Bienvenue sur votre Design System</h1>
      <form>
        <EmailInput label="Adresse Email" />
        {/* Ajoutez d'autres champs de formulaire si nécessaire */}
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default App;
