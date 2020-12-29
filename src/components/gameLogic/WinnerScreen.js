import React from 'react'
import { useSelector } from 'react-redux';



export const WinnerScreen = () => {

    const { winnerId } = useSelector( state => state.ui );
    const { players } = useSelector( state => state.players );

    const { name, score } = players.find( ({ id }) => id === winnerId )

    return (
        <div className="winner-screen animate__animated animate__fadeIn">
            <h2> ¡{ name } gana! </h2>
            <p> Puntaje final: { score.slice(-1)[0] } </p>
        </div>
    )
}
