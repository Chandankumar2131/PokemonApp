import React from 'react';

export default function PokemonCards({ pokemonData }) {
  return (
    <li className='pokemon-card'>
      <figure>
        <img
          src={pokemonData.sprites.other.dream_world.front_default}
          alt={pokemonData.name}
          className='pokemon-image'
        />
      </figure>
      <h2 className='pokemon-name'>{pokemonData.name}</h2>

      {/* Type */}
      <div className='pokemon-info type-list'>
        <p>{pokemonData.types.map((curType) => curType.type.name).join(', ')}</p>
      </div>

      {/* Height, Weight, Speed */}
      <div className='grid-three-cols'>
        <p className='pokemon-info'>
          <span>Height:</span>
          {pokemonData.height}
        </p>
        <p className='pokemon-info'>
          <span>Weight:</span>
          {pokemonData.weight}
        </p>
        <p className='pokemon-info'>
          <span>Speed:</span>
          {pokemonData.stats[5].base_stat}
        </p>
      </div>

      {/* Experience, Attack, Abilities */}
      <div className='grid-three-cols'>
        <div className='pokemon-info'>
          <p>{pokemonData.base_experience}</p>
          <span>Experience:</span>
        </div>
        <div className='pokemon-info'>
          <p>{pokemonData.stats[1].base_stat}</p>
          <span>Attack:</span>
        </div>
        <div className='pokemon-info'>
          <p>{pokemonData.abilities.map((abilityInfo) => abilityInfo.ability.name).slice(0, 1).join(', ')}</p>
          <span>Abilities:</span>
        </div>
      </div>
    </li>
  );
}
