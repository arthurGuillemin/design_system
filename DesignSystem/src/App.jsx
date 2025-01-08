import React from 'react';
import RoundedInput from './components/FormInput/RoundedInput';
const App = () => {
  return (
    <div>
<form >
      <RoundedInput
        label="Email"
        placeholder="Email"
        error={true}
        errorMessage="This is an error message"
        isPassword={false}
      />
    </form>
    </div>
  );
};

export default App;
