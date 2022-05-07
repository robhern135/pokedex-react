import React, { useState, useEffect } from "react"
import axios from "axios"

import Pokemon from "./Pokemon"

const Pokedex = () => {
  const [poke, setPoke] = useState([])
  const [loading, setLoading] = useState(false)
  const [filter, setFilter] = useState({
    //final pokemon in gen
    count: null,
    //first pokemon in gen
    offset: null,
  })

  const onGenChange = (e) => {
    let gen = e.target.value

    switch (gen) {
      case (gen = "Kanto"):
        console.log("Kanto")
        setFilter({
          count: 151,
          offset: 1,
        })
        break

      case (gen = "Johto"):
        console.log("Johto")
        setFilter({
          count: 251,
          offset: 152,
        })
        break

      case (gen = "Hoenn"):
        console.log("Hoenn")
        setFilter({
          count: 386,
          offset: 252,
        })
        break

      case (gen = "Sinnoh"):
        console.log("Sinnoh")
        setFilter({
          //final pokemon in gen
          count: 484,
          //first pokemon in gen
          offset: 387,
        })
        break

      case (gen = "Unova"):
        console.log("Unova")
        setFilter({
          //final pokemon in gen
          count: 649,
          //first pokemon in gen
          offset: 485,
        })
        break

      case (gen = "Kalos"):
        console.log("Kalos")
        setFilter({
          //final pokemon in gen
          count: 721,
          //first pokemon in gen
          offset: 650,
        })
        break

      case (gen = "Alola"):
        console.log("Alola")
        setFilter({
          //final pokemon in gen
          count: 809,
          //first pokemon in gen
          offset: 722,
        })
        break

      case (gen = "Galar"):
        console.log("Galar")
        setFilter({
          //final pokemon in gen
          count: 898,
          //first pokemon in gen
          offset: 810,
        })
        break

      default:
        return null
    }
  }

  const fetchPokemon = async () => {
    setLoading(true)

    for (let i = filter.offset; i <= filter.count; i++) {
      await axios.get(`https://pokeapi.co/api/v2/pokemon/${i}`).then((res) => {
        const newPokemon = res.data
        // console.log(newPokemon)
        setPoke((poke) => [...poke, newPokemon])
      })

      if (i === filter.count) {
        setLoading(false)
      }
    }
  }

  useEffect(() => {
    if (filter.count || filter.offset) {
      setPoke([])

      fetchPokemon()
    }
  }, [filter.offset])

  //151,1
  //251, 152
  //386, 252
  //484, 387
  //649. 485
  //721, 650
  //809, 722
  //898 ,810

  return (
    <React.Fragment>
      <div className="generation-container">
        <form className="gen-select  select-dropdown">
          <select
            className="gen-dropdown"
            defaultValue="select"
            onChange={onGenChange}
          >
            <option disabled value="select">
              Select a Generation to begin
            </option>
            <option value="Kanto">Kanto</option>
            <option value="Johto">Johto</option>
            <option value="Hoenn">Hoenn</option>
            <option value="Sinnoh">Sinnoh</option>
            <option value="Unova">Unova</option>
            <option value="Kalos">Kalos</option>
            <option value="Alola">Alola</option>
            <option value="Galar">Galar</option>
          </select>
        </form>
        {loading && <div className="spinner"></div>}
      </div>
      <div className="pokedex">
        {poke.map((pokemon) => (
          <Pokemon pokemon={pokemon} key={pokemon.id} />
        ))}
      </div>
    </React.Fragment>
  )
}

export default Pokedex
