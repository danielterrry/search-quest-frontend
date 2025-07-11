import React from 'react';
import { Formik, Form } from 'formik';
import FormGroupText from '../FormGroupText';
import Button from '../Button';

const GetStartedForm = () => {
  const initialValues = {
    query: '',
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('form data', values);
    setSubmitting(false);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => (
        <Form>
          <div style={{ display: 'flex', gap: '16px' }}>
            <FormGroupText
              placeholder="Search..."
              autoComplete="off"
              id="query"
              name="query"
            />

            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? 'Submitting...' : 'Search'}
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default GetStartedForm;
