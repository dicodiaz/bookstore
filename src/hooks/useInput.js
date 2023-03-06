import { useCallback, useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const clear = useCallback(() => setValue(''), []);
  const onChange = useCallback((e) => setValue(e.target.value), []);

  return {
    value,
    setValue,
    clear,
    onChange,
  };
};

export default useInput;
