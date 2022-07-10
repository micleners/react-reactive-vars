import * as React from 'react';
import GlobalStyle from './GlobalStyles';
import Character from './components/Character';
import CharacterForm from './components/CharacterForm';
import { StyledRow } from './components/styled';
import { CharacterProvider } from './context/useCharacterContext';

export default function App() {
  return (
    <CharacterProvider>
      <GlobalStyle />
      <StyledRow>
        <CharacterForm />
        <Character />
      </StyledRow>
    </CharacterProvider>
  );
}
