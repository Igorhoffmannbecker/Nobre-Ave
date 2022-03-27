import { createContext, useState } from 'react';

const InputValueContext = createContext({});

export function InputValueProvider({ children }) {
  const [valueInput, changeValueInput] = useState('');
  function setValueInput(value) {
    changeValueInput(value);
  }

  return (
    <InputValueContext.Provider
      value={{
        valueInput,
        setValueInput,
      }}
    >
      {children}
    </InputValueContext.Provider>
  );
}


export default InputValueContext;
