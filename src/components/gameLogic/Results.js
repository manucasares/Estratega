import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { changeCardsDealt, increaseWinningScore } from '../../actions/config';
import { changePlayersOrder, reset } from '../../actions/players';
import { showDrawText, showWinnerScreen } from '../../actions/ui';
import { changeScreenWithoutAnimation } from '../../helpers/changeScreen';


export const Results = () => {

    const { players } = useSelector( state => state.players );
    let { cardLimit, currentCardsDealt, winningScore } = useSelector( state => state.config );
    let { showDrawText: isTemporaryDraw } = useSelector( state => state.ui );
    
    const dispatch = useDispatch();
  
    // Chequeamos por win
    const playersWithWinningScore = players.filter( ({ score }) => score.slice( -1 )[0] >= winningScore );
    
    useEffect(() => {
        
        // si llega uno solo al winningScore
        if ( playersWithWinningScore.length === 1 ) {
            dispatch( showWinnerScreen( playersWithWinningScore[ 0 ].id ) );
        }

        // si llega más de uno al winningScore
        else if ( playersWithWinningScore.length >= 1 ) {
        
            // primero nos fijamos si hay alguno con score más alto que el otro
            const scores = playersWithWinningScore.map( player => player.score.slice(-1)[0] );
            const highestScore = Math.max( ...scores );

            // si hay mas de un score con el score más alto
            // es decir si dos o más personas ganaron al mismo tiempo y quedaron con el mismo score
            if ( scores.filter( score => score === highestScore).length > 1 ) {

                dispatch( showDrawText( true ) );
                dispatch( increaseWinningScore() );
            } else {

                const { id } = players.find( player => player.score.slice(-1)[0] === highestScore )
                dispatch( showWinnerScreen( id ) );
            }
        }

    }, [ dispatch, players, playersWithWinningScore ] )

    const handleReset = () => {

        let nextCardsDealt = `${ currentCardsDealt === cardLimit[ cardLimit.length - 1 ]
                                    ? 1
                                    : +currentCardsDealt + 2 }`;

        dispatch( changeCardsDealt( +nextCardsDealt ) );
        dispatch( reset() );
        dispatch( changePlayersOrder() );
        changeScreenWithoutAnimation( 'set_choices', dispatch );
        dispatch( showDrawText( false ) );
    }

    return (
        <>
            {
                ( isTemporaryDraw ) &&
                    <p className="text-center">
                        El puntaje para ganar ha sido aumentado en 10 por empate.
                    </p>
            }

            <div className="results">
                {
                    players.map( ({ name, score, id }) => (
        
                        <div
                            className="player-column"
                            key={ id }
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
                    onClick={ handleReset }
                ></i>
            </div>
        </>
    )
}
