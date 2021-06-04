import React from 'react';
import Data from './data';
import './grid.css'
import './index.css'

const Pokemon = () => {
  let [ position, setPosition ] = React.useState(0);

  function handleClick() {
    if ( position < Data.length - 1) {
      setPosition(position + 1)
    } else {
      setPosition(0)
    } 
  }
  
  function previousClick() {
    if ( position === 0 ) {
      setPosition(position = Data.length -1)
    } else {
      setPosition(position - 1)
    }
  }

  return (
    <>
      <section className="container grid-8">
        <div className="pokemon grid-8">
          <div>
            <p>{Data[position].name}</p>
            <p>{Data[position].type}</p>
            <p>{`Average weight: ${Data[position].averageWeight.value}${Data[position].averageWeight.measurementUnit}`}</p>
          </div>
          <img src={Data[position].image} alt={Data[position].name} />
        </div>
      </section>
      <section className="button grid-12">
        <button onClick={ previousClick }>Anterior</button>
        <button onClick={ handleClick }>Próximo</button>
      </section>
    </>
  )
}

export default Pokemon;