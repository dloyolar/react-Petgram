import { useState } from 'react';

export const useForm = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const onChange = (e) =>
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });

  return { value, onChange };
};
