import Form from './components/Form';
import FormInput from './components/FormInput';

function App() {
  const initialValues = {
    name: '',
    pass: '',
    email: '',
    dob: '',
  };

  const submit = (form) => {
    console.log('Form Values', form);
  };

  return (
    <div className="bg-white py-16 px-4 overflow-hidden sm:px-6 lg:px-8 lg:py-24">
      <Form submit={submit} initialValues={initialValues}>
        <FormInput label="Full Name" id="name" name="name" type="text" />
        <FormInput label="Password" id="pass" name="pass" type="password" />
        <FormInput label="Email Address" id="email" name="email" type="email" />
        <FormInput label="Date Of Birth" id="dob" name="dob" type="date" />
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
