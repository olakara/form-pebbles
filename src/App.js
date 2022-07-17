import Form from './components/Form';
import FormInput from './components/FormInput';
import Button from './components/Button';
import FormButtons from './components/FormButtons';

function App() {
  const initialValues = {
    name: '',
    pass: '',
    email: '',
    dob: '',
  };

  let nameOptions = {
    label: 'Full Name',
    id: 'name',
    name: 'name',
    type: 'text',
    isRequired: true,
    isDisabled: false,
  };

  let passOptions = {
    label: 'Password',
    id: 'pass',
    name: 'pass',
    type: 'password',
    isRequired: true,
    isDisabled: false,
  };

  let emailOptions = {
    label: 'Email Address',
    id: 'email',
    name: 'email',
    type: 'email',
    isRequired: true,
    isDisabled: false,
  };

  let dobOptions = {
    label: 'Date Of Birth',
    id: 'dob',
    name: 'dob',
    type: 'date',
    isRequired: false,
    isDisabled: false,
  };

  const submit = (form) => {
    console.log('Form Values', form);
  };

  return (
    <div className="py-10">
      <header className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="-ml-4 -mt-2 flex items-center justify-between flex-wrap sm:flex-nowrap">
          <div className="ml-4 mt-2">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">A basic form</h1>
          </div>
        </div>
      </header>
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Form submit={submit} initialValues={initialValues}>
          <FormInput options={nameOptions} />
          <FormInput options={passOptions} />
          <FormInput options={emailOptions} />
          <FormInput options={dobOptions} />
          <FormButtons>
            <Button label="Submit" onClick={submit} />
          </FormButtons>
        </Form>

        {/* Another Example */}
        {/* <Form submit={submit} initialValues={initialValues}>
        <div className="grid lg:grid-cols-4 gap-4 sm:grid-cols-1">
          <div>
            <FormInput label="Full Name" id="name1" name="name" type="text" />
          </div>
          <div>
            <FormInput label="Password" id="pass1" name="pass" type="password" />
          </div>
          <div>
            <FormInput label="Email Address" id="email1" name="email" type="email" />
          </div>
          <div>
            <FormInput label="Date Of Birth" id="dob1" name="dob" type="date" />
          </div>
        </div>
      </Form> */}
      </main>
    </div>
  );
}

export default App;
