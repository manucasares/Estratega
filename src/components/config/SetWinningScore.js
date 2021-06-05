import React from 'react'
import { useDispatch } from 'react-redux';


import { setWinningScore } from '../../actions/config';
import { hideSetWinningScore } from '../../actions/ui';


export const SetWinningScore = () => {

    const dispatch = useDispatch();

    const cards = [ 25, 50, 100 ];

    const handleClick = ( score ) => {

        dispatch( setWinningScore( score ) );

        // // UX
        const set_winning_score = document.getElementById('set_winning_score');
        set_winning_score.classList.remove('animate__backInRight');
        set_winning_score.classList.add('animate__backOutLeft');

        setTimeout(() => {
            dispatch( hideSetWinningScore() );
        }, 500);
    }

    return (
        <div
            className="set-winning-score-container animate__animated animate__backInRight"
            id="set_winning_score"
        >

            <h3>Seleccione el puntaje para ganar.</h3>

            <div className="cards-container">
                {
                    cards.map( card => (
                        <div
                            className="card"
                            onClick={ () => handleClick( card ) }
                        >
                            { card }
                        </div>
                    ) )
                }
            </div>
        </div>
    )
}
