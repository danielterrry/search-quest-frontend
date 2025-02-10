import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormGroupText from '../FormGroupText';
import Button from '../Button';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import Spinner from '../Spinner';
import { H2Typography } from '../Typography';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
});

const ProfileForm = () => {
  const { profile, update, isLoading } = useAuth();

  const initialValues = {
    firstName: profile.firstName,
    lastName: profile.lastName,
  };

  const navigate = useNavigate();
  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const success = await update({
        id: profile.id,
        ...initialValues,
        ...values,
      });

      if (success) {
        console.log('completed');
      }
    } catch (error) {
      console.error(error);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        {({ isSubmitting }) => (
          <>
            {isSubmitting && isLoading && <Spinner />}
            <Form className="form">
              <H2Typography>Profile</H2Typography>
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
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Submitting...' : 'Submit'}
              </Button>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default ProfileForm;
