import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormGroupText from '../FormGroupText';
import Button from '../Button';
import { H2Typography } from '../Typography';
import { register } from '../../api/auth';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const validationSchema = Yup.object({
  email: Yup.string().required('email is required'),
  password: Yup.string().required('password is required'),
});

const SignUpForm = () => {
  const initialValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  };

  const { setTokens, setProfile } = useAuth();
  const navigate = useNavigate();
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const registerUser = await register({
        ...values,
        fullName: `${values.firstName} ${values.lastName}`,
      });
      const { tokens, user } = registerUser;

      if (tokens.access.token) {
        setProfile(user);
        setTokens(tokens);
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
          />
          <FormGroupText label="Email" type="email" id="email" name="email" />
          <FormGroupText
            label="Password"
            type="password"
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
