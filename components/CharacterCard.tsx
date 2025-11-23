
import React from 'react';
import type { Character } from '../types';

interface CharacterCardProps {
  character: Character;
}

const StatBar: React.FC<{ value: number }> = ({ value }) => {
  const max = 10;
  const bars = Array.from({ length: max }, (_, i) => (
    <div
      key={i}
      className={`w-full h-2 ${i < value ? 'bg-green-500' : 'bg-gray-600'}`}
    ></div>
  ));
  return <div className="flex gap-px w-full">{bars}</div>;
};

export const CharacterCard: React.FC<CharacterCardProps> = ({ character }) => {
  return (
    <div className="bg-gray-800 pixel-border p-1 transition-transform duration-200 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/20">
      <div className="bg-gray-900 w-full">
        {/* Top Half: Image */}
        <div className="p-1.5">
          <div className="pixel-border-inset p-0.5">
             <img
              src={character.imageUrl}
              alt={`Portrait of ${character.name}`}
              className="w-full h-auto aspect-square object-cover [image-rendering:pixelated] contrast-125 saturate-150"
            />
          </div>
        </div>

        {/* Bottom Half: Info */}
        <div className="p-2 text-base">
          <h2 className="text-xl text-yellow-400 truncate mb-2">{character.name}</h2>

          <div className="space-y-1 text-gray-200">
            <div className="flex items-center gap-2">
              <span className="w-8 shrink-0">SPD</span>
              <div className="flex-1"><StatBar value={character.attributes.spd} /></div>
              <span className="w-6 text-right shrink-0">{character.attributes.spd}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 shrink-0">DEX</span>
              <div className="flex-1"><StatBar value={character.attributes.dex} /></div>
              <span className="w-6 text-right shrink-0">{character.attributes.dex}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 shrink-0">ATT</span>
              <div className="flex-1"><StatBar value={character.attributes.att} /></div>
              <span className="w-6 text-right shrink-0">{character.attributes.att}</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-8 shrink-0">CHR</span>
              <div className="flex-1"><StatBar value={character.attributes.chr} /></div>
              <span className="w-6 text-right shrink-0">{character.attributes.chr}</span>
            </div>
          </div>

          <div className="mt-3 text-center bg-green-950 pixel-price-border p-1.5">
            <p className="text-lg text-green-300">{character.price}$ / SHIFT</p>
          </div>
        </div>
      </div>
    </div>
  );
};
