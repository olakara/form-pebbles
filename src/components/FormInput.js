import { useContext } from 'react';
import { FormContext } from './Form';

function FormInput(props) {
  const { label, id, type, name, isDisabled, isRequired } = props.options;

  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  let isRequiredLabel = '';
  if (isRequired) {
    isRequiredLabel = <span className="text-red-600">*</span>;
  }

  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700">
        {label} {isRequiredLabel}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={name}
          type={type}
          value={form[name]}
          onChange={handleFormChange}
          autoComplete="off"
          aria-label={label}
          title={label}
          disabled={isDisabled}
          required={isRequired}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-green-500 focus:border-green-500 sm:text-sm"
        />
      </div>
    </div>
  );
}

export default FormInput;
