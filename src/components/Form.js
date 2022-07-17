import React, { useState } from 'react';

export const FormContext = React.createContext({
  form: {},
});

function Form(props) {
  const { children, initialValues } = props;

  const [form, setForm] = useState(initialValues);

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    const updatedForm = {
      ...form,
      [name]: value,
    };
    setForm(updatedForm);
  };

  return (
    <form className="space-y-8 divide-y divide-gray-200">
      <FormContext.Provider
        value={{
          form,
          handleFormChange,
        }}
      >
        {children}
      </FormContext.Provider>
    </form>
  );
}

export default Form;
