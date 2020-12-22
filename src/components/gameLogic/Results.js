import React from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { changeCardsDealt } from '../../actions/config';
import { reset } from '../../actions/players';
import { hideResults } from '../../actions/ui';


export const Results = () => {

    const { players } = useSelector( state => state.players );
    let { cardLimit, currentCardsDealt } = useSelector( state => state.config );
    
    const dispatch = useDispatch();


    const handleReset = () => {

        let nextCardsDealt = `${ currentCardsDealt === cardLimit[ cardLimit.length - 1 ]
                                    ? 1
                                    : +currentCardsDealt + 2 }`;


        dispatch( changeCardsDealt( +nextCardsDealt ) );
        dispatch( reset() );
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
