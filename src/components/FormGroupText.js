import { ErrorMessage, Field } from 'formik';
import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors';

const FormGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
`;

export const TextInput = styled.input.attrs((props) => ({
  type: props.type || 'text',
  size: props.size || '1rem',
}))`
  &:focus {
    box-shadow: 0 0 5px ${Colors.primary};
    border-color: ${Colors.primary};
  }

  outline: none;
  border: 2px solid ${Colors.darkGray};
  width: 100%;
  padding: 12px 10px;
  border-radius: 4px;
  font-size: 15px;
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-weight: 600;
  margin-bottom: 8px;
`;

const FormGroupText = ({ label, type, id, placeholder, name }) => (
  <FormGroupStyled style={{ marginBottom: '1rem' }}>
    <FormLabel for={id}>{label}</FormLabel>
    <Field
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      as={TextInput}
    />
    <ErrorMessage
      style={{
        color: Colors.redError,
        marginTop: '8px',
      }}
      name={name}
      component="div"
    />
  </FormGroupStyled>
);

export default FormGroupText;
