import Form from './components/Form';
import FormInput from './components/FormInput';

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
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <Form submit={submit} initialValues={initialValues}>
        <FormInput options={nameOptions} />
        <FormInput options={passOptions} />
        <FormInput options={emailOptions} />
        <FormInput options={dobOptions} />
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
    </div>
  );
}

export default App;
