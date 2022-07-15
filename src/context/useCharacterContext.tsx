import React, { createContext, useContext } from 'react';

import { makeVar, useReactiveVar, ReactiveVar } from '@apollo/client';

const CharacterContext = createContext<
  [Character, ReactiveVar<Character>] | null
>(null);

const newCharacter = {
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
};

export interface Character {
  name: string;
  player: string;
  background: string;
  race: string;
  alignment: string;
  str: string;
  dex: string;
  con: string;
  int: string;
  wis: string;
  cha: string;
}

export const CharacterProvider = (props) => {
  const setCharacter = makeVar(newCharacter);
  const character = useReactiveVar(setCharacter);

  return (
    <CharacterContext.Provider value={[character, setCharacter]} {...props} />
  );
};

export const useCharacter = () => {
  const context =
    useContext<
      [Character, React.Dispatch<React.SetStateAction<Character>> | null]
    >(CharacterContext);

  if (!context) {
    throw new Error('useCharacter must be used within the CharacterProvider');
  }

  return context;
};
