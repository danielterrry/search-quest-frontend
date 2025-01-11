import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormGroupText from '../FormGroupText';
import Button from '../Button';
import { H2Typography } from '../Typography';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const validationSchema = Yup.object({
  email: Yup.string().required('email is required'),
  password: Yup.string().required('password is required'),
});

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const { login } = useAuth();
  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting, setErrors }) => {
    const success = await login(values);

    if (success === true) {
      navigate('/dashboard');
    } else {
      setErrors({ email: success });
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <H2Typography>Login</H2Typography>
          <FormGroupText label="Email" type="email" id="email" name="email" />
          <FormGroupText
            label="Password"
            type="password"
            id="password"
            name="password"
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Sign in'}
          </Button>
          <Button type="button" onClick={() => navigate('/register')}>
            Register
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
