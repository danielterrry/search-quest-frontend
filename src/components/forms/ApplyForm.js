import React from 'react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import FormGroupText from '../FormGroupText';
import Button from '../Button';
import { H2Typography } from '../Typography';

const validationSchema = Yup.object({
  title: Yup.string().required('Title is required'),
  firstName: Yup.string().required('First name is required'),
  lastName: Yup.string().required('Last name is required'),
  job: Yup.string().required('Job is required'),
  relationship: Yup.string().required('Relationship is required'),
  employerPhone: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be exactly 10 digits')
    .required('Employer phone is required'),
  mobile: Yup.string()
    .matches(/^\d{10}$/, 'Mobile number must be exactly 10 digits')
    .required('Mobile is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  employer: Yup.string().required('Employer is required'),
});

const ApplyForm = () => {
  const initialValues = {
    title: '',
    firstName: '',
    lastName: '',
    job: '',
    relationship: '',
    employerPhone: '',
    mobile: '',
    email: '',
    employer: '',
  };

  const onSubmit = (values, { setSubmitting, resetForm }) => {
    console.log('form data', values);
    setSubmitting(false);
    // resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="form">
          <H2Typography>Details</H2Typography>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque id
            erat sollicitudin, scelerisque neque in, gravida neque.
          </p>
          <FormGroupText label="Title" id="title" name="title" />
          <FormGroupText label="First Name" id="firstName" name="firstName" />
          <FormGroupText label="Last Name" id="lastName" name="lastName" />
          <FormGroupText label="Job" id="job" name="job" />
          <FormGroupText
            label="Relationship"
            id="relationship"
            name="relationship"
          />
          <FormGroupText
            label="Employer Phone"
            id="employerPhone"
            name="employerPhone"
          />
          <FormGroupText label="Mobile" id="mobile" name="mobile" />
          <FormGroupText label="Email" id="email" name="email" type="email" />
          <FormGroupText label="Employer" id="employer" name="employer" />
          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? 'Submitting...' : 'Submit'}
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ApplyForm;
