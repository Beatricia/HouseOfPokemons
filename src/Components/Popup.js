import React, {useEffect, useState} from 'react'
import './Popup.css'

function Popup({selectedPokemon, setSelectedPokemon}) {
    const[pokemon, setPokemon] = useState(null);

    useEffect(() =>
    {
        if(selectedPokemon != null) {
        fetch(selectedPokemon?.pokeURL)
            .then(response => response.json())
            .then(
                (pokemon) =>  setPokemon(pokemon)
            )
        }
    }, [selectedPokemon?.id]) // it only runs when a new pokemon is there

    return selectedPokemon ? (
         <div className='popup'>
             <div className='popup-inner'>
                 <div className='infoDiv'>
                 <button className="button-close-modal" onClick={() => setSelectedPokemon(null)}>X</button>
                 <p>Name: {pokemon?.name}</p>
                 <p>Type: {pokemon?.types[0].type.name}</p>
                 <p>Stats: {pokemon?.stats[0].stat.name} | {pokemon?.stats[1].stat.name} | {pokemon?.stats[2].stat.name} |
                     {pokemon?.stats[3].stat.name} | {pokemon?.stats[4].stat.name} | {pokemon?.stats[5].stat.name}</p>
                 <p>Abilities: {pokemon?.abilities[0].ability.name} | {pokemon?.abilities[1]?.ability.name}</p>
                 <p>Height: {pokemon?.height}</p>
                 <p>Weight: {pokemon?.weight}</p>
                 </div>

                 <div className='photoDiv'>
                     <img className='pokemonImgPopup' src={selectedPokemon.image} alt='pokemon image'></img>
                 </div>

             </div>
         </div>


    ) : <span></span>;
}

export default Popup