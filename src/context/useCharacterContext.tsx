import React, { createContext, useContext, useState } from 'react';

const CharacterContext =
  createContext<[Character, React.Dispatch<React.SetStateAction<Character>>] | null>(null);

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
  const [character, setCharacter] = useState<Character>({
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
  });

  return (
    <CharacterContext.Provider value={[character, setCharacter]} {...props} />
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
