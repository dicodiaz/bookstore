import { useState } from 'react';

const useInputHook = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  return {
    value,
    setValue,
    reset: () => setValue(''),
    onChange: (event) => setValue(event.target.value),
  };
};

export default useInputHook;
