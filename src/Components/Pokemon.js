import React from "react"
import "./Pokemon.css"

export default function Pokemon({pokemon, setSelectedPokemon}) {
    return (
        <div className='pokeContainer' onClick={() => setSelectedPokemon(pokemon)}>
            <p className='pokemonName'>{pokemon.name}</p>
            <img className='pokemonImg' src={pokemon.image} alt='pokemon image'></img>
        </div>
    )
}