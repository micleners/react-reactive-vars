import React from 'react';
import { Formik } from 'formik';

import { useCharacter } from '../context/useCharacterContext';
import AbilityInputs from './AbilityInputs';
import AttributeInputs from './AttributeInputs';
import { StyledForm } from './styled';

const CharacterForm = () => {
  const [character, setCharacter] = useCharacter();

  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={character}
        onSubmit={(values) => {
          setCharacter(values);
        }}
      >
        {({ values, handleChange, handleSubmit }) => (
          <StyledForm onSubmit={handleSubmit}>
            <AttributeInputs />
            <AbilityInputs />
            <button type="submit">Submit</button>
          </StyledForm>
        )}
      </Formik>
    </div>
  );
};

export default CharacterForm;
