import React, { createContext, useContext, useState } from 'react';

import { makeVar, useReactiveVar } from '@apollo/client';

const CharacterContext = createContext<
  [Character, React.Dispatch<React.SetStateAction<Character>>] | null
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

export const reactiveChar = makeVar(newCharacter);

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
  const [character, setCharacter] = useState<Character>(newCharacter);
  const character2 = useReactiveVar(reactiveChar);

  return (
    <CharacterContext.Provider value={[character2, reactiveChar]} {...props} />
  );
};

export const useCharacter = () => {
  const context =
    useContext<[Character, React.Dispatch<React.SetStateAction<Character>>]>(
      CharacterContext
    );

  if (!context) {
    throw new Error('useCharacter must be used within the CharacterProvider');
  }

  return context;
};
