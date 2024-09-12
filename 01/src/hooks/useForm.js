import { useState } from "react";

export const useForm = (initialValue = {}) => {
  const [form, setForm] = useState(initialValue);

  const onInputChange = ({ target }) => {
    const { id, value } = target;
    setForm({
      ...form,
      [id]: value,
    });
  };

  return { form, onInputChange };
};
