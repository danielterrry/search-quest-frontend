import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormGroupText from '../FormGroupText';
import Button from '../Button';
import { useAuth } from '../../contexts/AuthContext';
import Spinner from '../Spinner';
import { H2Typography } from '../Typography';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
});

const ProfileForm = ({ isEdit, onEdit }) => {
  const { profile, update, isLoading } = useAuth();

  const initialValues = {
    firstName: profile.firstName,
    lastName: profile.lastName,
  };

  const onSubmit = async (values, { setSubmitting }) => {
    try {
      const success = await update({
        id: profile.id,
        ...initialValues,
        ...values,
      });

      if (success) {
        onEdit(false);
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
              <div style={{ display: 'flex', gap: '6px' }}>
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? 'Submitting...' : 'Submit'}
                </Button>
                {isEdit && !isSubmitting ? (
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => {
                      onEdit(!isEdit);
                    }}
                  >
                    Cancel
                  </Button>
                ) : null}
              </div>
            </Form>
          </>
        )}
      </Formik>
    </>
  );
};

export default ProfileForm;
