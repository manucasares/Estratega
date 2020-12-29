import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { changeCardsDealt } from '../../actions/config';
import { changePlayersOrder, reset } from '../../actions/players';
import { hideResults, showWinnerScreen } from '../../actions/ui';


export const Results = () => {

    const { players } = useSelector( state => state.players );
    let { cardLimit, currentCardsDealt, winningScore } = useSelector( state => state.config );
    
    const dispatch = useDispatch();
  

    // Chequeamos por win
    const playersWithWinningScore = players.filter( ({ score }) => score.slice( -1 )[0] >= winningScore );
    
    
    useEffect(() => {
        
        // si llega uno solo al winningScore
        if ( playersWithWinningScore.length === 1 ) {
            dispatch( showWinnerScreen( playersWithWinningScore[0].id ) );
        }

        // si llega más de uno al winningScore
        else if ( playersWithWinningScore.length >= 1 ) {
        
        }
        
    }, [])





    const handleReset = () => {

        let nextCardsDealt = `${ currentCardsDealt === cardLimit[ cardLimit.length - 1 ]
                                    ? 1
                                    : +currentCardsDealt + 2 }`;


        dispatch( changeCardsDealt( +nextCardsDealt ) );
        dispatch( reset() );
        dispatch( changePlayersOrder() )
        dispatch( hideResults() );
    }


    return (

        <div className="results">
            {
                players.map( ({ name, score, id }) => (
    
                    <div
                        className="player-column"
                        key={id}
                    >

                        <h3 className="name">{ name }</h3>

                        {
                            score.map( ( score, i, arr ) => (
                                <p
                                    className={ `score ${ i === ( arr.length - 1 ) && 'current-score' }` }
                                    key={i}
                                >
                                    { score } 
                                </p>
                            ))
                        }

                    </div>
    
                ))
            }

            <i
                className="far fa-arrow-alt-circle-right animate__animated animate__fadeIn"
                onClick={handleReset}
            ></i>
        </div>
    )
}
