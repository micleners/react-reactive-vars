import React from 'react';
import { isDarkModeVar, useCharacter } from '../context/useCharacterContext';
import { StyledCharacter, StyledCharacterRow } from './styled';
import { makeVar, useReactiveVar } from '@apollo/client';

export default function Character() {
  const [_, __, character, setCharacter] = useCharacter();

  return (
    <StyledCharacter>
      {character &&
        Object.entries(character).map(([key, value]) => (
          <StyledCharacterRow key={key}>
            <div>{key}</div>
            <div>{value}</div>
          </StyledCharacterRow>
        ))}
      <button
        onClick={() =>
          setCharacter({
            name: '',
            player: '',
            background: '',
            race: '',
            alignment: '',
            str: '',
            dex: '',
            con: '',
            int: '',
            wis: '',
            cha: '',
          })
        }
      >
        Clear Sheet
      </button>
    </StyledCharacter>
  );
}
