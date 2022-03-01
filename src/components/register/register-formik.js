import { registerService, useState } from 'util/imports';

/* import { Formik } from 'formik';

export const Register = () => {
  return (
    <>
      <h2>Formulario de registro</h2>
      <Formik
        initialValues={{
          username: "",
          password: ""
        }}
        validate={values => {
          const errors = {};
          if(!values.username) errors.username = 'Required username';
          if(!values.password) errors.password = 'Required password';
          else if(values.password.length < 3) errors.password = 'Password length must be greater than 3';
          return errors;
        }}
        onSubmit={(values, { setFieldError }) => {
          return registerService(values).catch(() => {
            setFieldError("username", "This username is not valid");
          });
        }}
      >
        {({ errors, handleChange, handleSubmit, isSubmitting }) => (
          <form className="form" onSubmit={handleSubmit}>
            <input
              className={errors.username ? 'error' : ''}
              name="username"
              placeholder="Put here the username"
              onChange={handleChange}
            ></input>
            {
              errors.username &&
              <small className="form-error">
                {errors.username}
              </small>
            }
            <input
              className={errors.password ? 'error' : ''}
              name="password"
              placeholder="Put here the password"
              onChange={handleChange}
            ></input>
            {
              errors.password && 
              <small className="form-error">
                {errors.password}
              </small>
            }
            <button className="btn" disabled={isSubmitting}>
              Registrarse
            </button>
          </form>
        )}
      </Formik>
    </>
  );
}; */

import { Formik, Form, Field, ErrorMessage } from 'formik';

const validateFields = values => {
  const errors = {};
  if(!values.username) errors.username = 'Required username';
  if(!values.password) errors.password = 'Required password';
  else if(values.password.length < 3) errors.password = 'Password length must be greater than 3';
  return errors;
};

const initialValues = {
  username: '',
  password: ''
};

export const Register = () => {
  const [registered, setRegistered] = useState(false);

  if(registered) {
    return <h4>
      <span role="img" aria-label="Check registered">
        Congratulations ✅! You&apos;ve been succesfully registered!
      </span>
    </h4>;
  }

  return (
    <>
      <Formik
        initialValues={initialValues}
        validate={validateFields}
        onSubmit={(values, { setFieldError }) => {
          return registerService(values)
            .then(() => setRegistered(true))
            .catch(() => {
              setFieldError('username', 'This username is not valid');
            });
        }}
      >
        {({ errors, isSubmitting }) => (
          <Form className="form">
            <Field
              className={errors.username ? 'error' : ''}
              name="username"
              placeholder="Put here the username"
            />
            <ErrorMessage className='form-error' name='username' component='small' />

            <Field
              className={errors.password ? 'error' : ''}
              name="password"
              placeholder="Put here the password"
              type='password'
            />
            <ErrorMessage className='form-error' name='password' component='small' />

            <button className="btn" disabled={isSubmitting}>
              Registrarse
            </button>
          </Form>
        )}
      </Formik>
    </>
  );
};