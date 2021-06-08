import React from 'react'
import { useSelector } from 'react-redux';


export const ResultsTab = () => {

    const { players } = useSelector( state => state.players );
    const { winningScore } = useSelector( state => state.config );

    return (
        <section className="results-tab-container">

            <h5> Puntaje para ganar: <strong>{ winningScore }</strong> </h5>

            {
                players.map( ({ id, name, score }) => (
                    <div
                        key={ id }
                        className="result-tab"
                    >
                        <span className="player-name">
                            { name }
                        </span>

                        <span>
                            { score.slice(-1)[0] }
                        </span>
                    </div>   
                ))
            }
        </section>
    )
}
