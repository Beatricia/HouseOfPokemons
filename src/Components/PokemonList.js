import React from 'react'
import Pokemon from "./Pokemon";
import './PokemonList.css'

export default function PokemonList({ pokemonList, setSelectedPokemon }) {
    return (
        <div className='pokemonList'>
            {
                pokemonList.map(pokemon => (
                        <Pokemon pokemon={pokemon} setSelectedPokemon={setSelectedPokemon}></Pokemon>
            ))}
        </div>
    )
}

