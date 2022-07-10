import { useFormikContext } from 'formik';
import React from 'react';
import { Character } from '../context/useCharacterContext';

export default function AttributeInputs() {
  const { values, handleChange } = useFormikContext<Character>();

  return (
    <div className="input-group">
      <h3>name</h3>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
      />

      <h3>player</h3>
      <input
        type="text"
        name="player"
        value={values.player}
        onChange={handleChange}
      />

      <h3>background</h3>
      <textarea
        name="background"
        value={values.background}
        onChange={handleChange}
      />

      <h3>race</h3>
      <textarea name="race" value={values.race} onChange={handleChange} />

      <h3>alignment</h3>
      <textarea
        name="alignment"
        value={values.alignment}
        onChange={handleChange}
      />
    </div>
  );
}
