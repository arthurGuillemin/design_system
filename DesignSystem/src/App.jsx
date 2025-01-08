import React from 'react';
import EmailInput from './components/FormInput/EmailInput';

const App = () => {
  return (
    <div>
      <form>
        <EmailInput label="Adresse Email" />
        {/* Ajoutez d'autres champs de formulaire si nécessaire */}
        <button type="submit">Soumettre</button>
      </form>
    </div>
  );
};

export default App;
