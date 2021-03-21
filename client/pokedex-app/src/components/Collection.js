import React from 'react';

function Collection({ pokemons, onClick }) {
    if(pokemons.length === 0) return <div className = "collection empty">You Have No Pokemons In Your Collection</div>
    return (
        <>  
            <h3>Collection:</h3>
            <div className = "collection">
                {
                    pokemons.map(pokemon => {
                        return(
                            <div onClick={onClick} className = "collection-item clickable">
                            <span>{pokemon.name}</span>
                            <img className = "collection-item" src = {pokemon.sprites.front} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default Collection;