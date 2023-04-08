import React, {useEffect, useState} from "react"
import PokemonList from "../Components/PokemonList";
import Popup from "../Components/Popup";
import Pagination from "../Components/Pagination";
import "./Pokedex.css"

export default function Pokedex() {
    const [pokemonList, setPokemonList] = useState([]);
    const [selectedPokemon, setSelectedPokemon] = useState(null);
    const [currentPageUrl, setCurrentPageUrl] = useState(["https://pokeapi.co/api/v2/pokemon?offset=12&limit=12"]);
    const [prevPageUrl, setPrevPageUrl] = useState([]);
    const [nextPageUrl, setNextPageUrl] = useState([]);
    const [loading, setLoading] = useState(true); // by default the app is loading

    useEffect(() => {
        setLoading(true)
        fetch(currentPageUrl)
            .then(res => {
                if(!res.ok) throw new Error("Response was not ok!")
                return res.json();
            })
            .then(res => {
                    console.log(res);
                    setLoading(false)//we already have the data
                    setNextPageUrl(res.next)
                    setPrevPageUrl(res.previous)

                    setPokemonList(res.results.map(p => {
                        let splittedUrl = p.url.split("/");
                        let id = splittedUrl[splittedUrl.length - 2];

                        return{
                            name: p.name,
                            id: id,
                            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`,
                            backupImage: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`,
                            pokeURL: 'https://pokeapi.co/api/v2/pokemon/' + id + '/',
                        }
                    }))
                }
            )
    }, [currentPageUrl])
    // this useEffect says, every single time the currentPageUrl is changed, rerun what is inside

    function goToNextPage(){
        setCurrentPageUrl(nextPageUrl);
    }
    function goToPreviousPage(){
        setCurrentPageUrl(prevPageUrl);
    }

    if(loading) return "Loading the pokemons."

    return (
        <>
            <h1>Welcome to THE HOUSE OF POKEMONS</h1>

            <PokemonList pokemonList = {pokemonList} setSelectedPokemon={setSelectedPokemon} />

            <Popup selectedPokemon={selectedPokemon} setSelectedPokemon={setSelectedPokemon}></Popup>

            <Pagination
                goToNextPage={nextPageUrl ? goToNextPage : null}
                goToPrevPage={prevPageUrl ? goToPreviousPage : null}
            />
        </>
    )
}

