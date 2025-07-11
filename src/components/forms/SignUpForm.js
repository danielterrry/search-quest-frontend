import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormGroupText from '../FormGroupText';
import Button from '../Button';
import { H2Typography } from '../Typography';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  email: Yup.string().required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const SignUpForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const { register } = useAuth();
  const navigate = useNavigate();
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const success = await register(values);

      if (success === true) {
        navigate('/dashboard');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
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
          <H2Typography>Register</H2Typography>
          <FormGroupText
            label="First Name"
            type="text"
            id="firstName"
            name="firstName"
          />
          <FormGroupText
            label="Last Name"
            type="text"
            id="lastName"
            name="lastName"
            autoComplete="off"
          />
          <FormGroupText label="Email" type="email" id="email" name="email" />
          <FormGroupText
            label="Password"
            type="password"
            autoComplete="new-password"
            id="password"
            name="password"
          />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Continue'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default SignUpForm;
