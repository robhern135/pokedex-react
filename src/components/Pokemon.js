import React, { useState } from "react"

const Pokemon = ({ pokemon }) => {
  const colors = {
    fire: "#FDDFDF",
    grass: "#DEFDE0",
    electric: "#FCF7DE",
    water: "#DEF3FD",
    ground: "#f4e7da",
    rock: "#d5d5d4",
    fairy: "#fceaff",
    poison: "#98d7a5",
    bug: "#f8d5a3",
    dragon: "#97b3e6",
    psychic: "#eaeda1",
    flying: "#F5F5F5",
    fighting: "#E6E0D4",
    normal: "#F5F5F5",
  }

  const main_types = Object.keys(colors)

  const { id } = pokemon
  const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
  const number = pokemon.id.toString().padStart("3", "0")
  const poke_types = pokemon.types.map((t) => t.type.name)
  const useType = main_types.find((type) => poke_types.indexOf(type) > -1)
  const color = colors[useType]

  const sprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  // const shinySprite = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`

  return (
    <div className="pokemon" style={{ backgroundColor: color }}>
      <div className="img-container">
        <img src={sprite} alt={name} />
      </div>
      <div className="info">
        <span className="number">{`#${number}`}</span>
        <h3 className="name">{name}</h3>
        <small className="type">
          Type: <span>{`${useType}`}</span>
        </small>
      </div>
    </div>
  )
}

export default Pokemon
