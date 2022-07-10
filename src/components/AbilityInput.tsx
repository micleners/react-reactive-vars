import { useFormikContext } from 'formik';
import React from 'react';

export default function AbilityInput({ name }) {
  const { values, handleChange } = useFormikContext();
  return (
    <React.Fragment>
      <h3>{name}</h3>
      <input
        type="number"
        name={name}
        min="0"
        max="100"
        value={values[name]}
        onChange={handleChange}
      />
    </React.Fragment>
  );
}
