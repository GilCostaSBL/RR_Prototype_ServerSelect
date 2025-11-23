
import React, { useState, useEffect } from 'react';
import { CharacterCard } from './components/CharacterCard';
import type { Character } from './types';

const App: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);

  useEffect(() => {
    const generateRandomNumber = (min: number, max: number): number => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const firstNames = ['Jex', 'Kael', 'Lyra', 'Zane', 'Flin', 'Nia', 'Rork', 'Vex', 'Gwen', 'Talon', 'Bree', 'Cade'];
    
    const generatedCharacters: Character[] = Array.from({ length: 16 }, (_, i) => {
      const name = firstNames[generateRandomNumber(0, firstNames.length - 1)];
      const uniqueName = `${name}-${generateRandomNumber(10,99)}`;
      return {
        id: i,
        name: uniqueName,
        imageUrl: `https://api.dicebear.com/8.x/adventurer/svg?seed=${uniqueName}`,
        attributes: {
          spd: generateRandomNumber(5, 10),
          dex: generateRandomNumber(5, 10),
          att: generateRandomNumber(5, 10),
          chr: generateRandomNumber(5, 10),
        },
        price: generateRandomNumber(22, 45),
      };
    });

    setCharacters(generatedCharacters);
  }, []);

  return (
    <div className="min-h-screen bg-[#0d0d0d] text-white p-4">
      <header className="text-center mb-6">
        <h1 className="text-4xl md:text-5xl text-yellow-400 animate-pulse">SELECT YOUR OPERATIVE</h1>
      </header>
      <main className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-4">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </main>
      <footer className="text-center mt-8 text-gray-500 text-sm">
        <p>All operatives are procedurally generated.</p>
        <p>Values are non-negotiable.</p>
      </footer>
    </div>
  );
};

export default App;
