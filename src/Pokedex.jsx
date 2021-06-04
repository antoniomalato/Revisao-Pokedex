import React from 'react'
import Pokemon from './Pokemon'
import './index.css'

const Pokedex = () => {
  return (
    <div className="pokedex">
      <h1>Pokedex</h1>
      <Pokemon />
    </div>
  )
}

export default Pokedex;