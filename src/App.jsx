import React, { useEffect, useState } from "react";
import "./Pokemon.css"
import PokemonCards from "./PokemonCards";

export default function Hello() {
const [pokemon,setPokemon]= useState([])
const[loading,setLoading]=useState(true)
const[error,setError]= useState(null)
const[inputValue,setInputValue]= useState("")
  
const API = "https://pokeapi.co/api/v2/pokemon?limit=124";

const fetchPokemon = async()=>{
try {
  const res= await fetch(API)
const data= await res.json();
// console.log(data);
const detailedPokemoneData= data.results.map(async(curValue)=>{
  const res= await fetch(curValue.url);
  const data= await res.json();
  // console.log(data);
  return data;
})
// console.log(detailedPokemoneData);
const detailedResponce = await Promise.all(detailedPokemoneData);
console.log(detailedResponce);
setPokemon(detailedResponce);
setLoading(false);


} catch (error) {
  console.log(error);
  setLoading(false);
  setError(error)
  
}

}
  useEffect(()=>{

fetchPokemon()
  },[])

  // search functionaty
const searchData = pokemon.filter((curPokemon)=>
curPokemon.name.toLowerCase().includes(inputValue.toLowerCase())
);
  if(loading){
    return(
      <div>
      <h1>Loading...</h1>
      </div>
    )
  }

   if(error){
    return(
      <div>
      <h1>{error.message}</h1>
      </div>
    );
  }

  return (
     <>
  <section className="container">
    <header>
      <h1>Lets catch Pokemon</h1>
    </header>
    <div className="pokemon-search">
      <input type="text"
      placeholder="search-pokemon" value={inputValue} onChange={(e)=>setInputValue(e.target.value)} />

    </div>
    <div >
<ul>
{searchData.map((curPokemon)=>{
return (
  <PokemonCards key={curPokemon.id} pokemonData={curPokemon} />
)
})}
</ul>
    </div>

  </section>
  </>
  )
 
}
