import { useFormikContext } from 'formik';
import React from 'react';
import { Character } from '../context/useCharacterContext';

export default function AbilityInput({ name }) {
  const { values, handleChange } = useFormikContext<Character>();
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
