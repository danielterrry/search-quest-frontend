import { ErrorMessage, Field } from 'formik';
import React from 'react';
import styled from 'styled-components';
import Colors from '../Colors';

const FormGroupStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: baseline;
  width: 100%;
`;

export const TextInput = styled.input.attrs((props) => ({
  type: props.type || 'text',
  size: props.size || '1rem',
}))`
  &:focus {
    outline: 2px solid transparent;
    outline-offset: 2px;
    box-shadow: 0 0 0 1px ${Colors.primary};
    border-color: ${Colors.primary};
  }

  outline: none;
  border: 1px solid ${Colors.lightGray};
  width: 100%;
  padding: 12px 10px;
  border-radius: 4px;
  height: 40px;
`;

export const FormLabel = styled.label`
  display: inline-block;
  font-weight: 600;
  margin-bottom: 8px;
`;

const FormGroupText = ({
  label,
  type,
  id,
  placeholder,
  name,
  autoComplete,
  onClick,
  children,
}) => (
  <FormGroupStyled style={{ marginBottom: '1rem' }}>
    {label ? <FormLabel for={id}>{label}</FormLabel> : null}
    <Field
      id={id}
      type={type}
      placeholder={placeholder}
      name={name}
      as={TextInput}
      autocomplete={autoComplete}
      onClick={onClick}
    />
    {children && children}
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
