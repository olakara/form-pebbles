import { useContext } from 'react';
import { FormContext } from './Form';

function Button(props) {
  const { label, onClick } = props;

  const formContext = useContext(FormContext);
  const { form } = formContext;

  return (
    <button
      type="button"
      onClick={() => onClick(form)}
      className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white disabled:bg-gray-500 bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
    >
      {label}
    </button>
  );
}

export default Button;
