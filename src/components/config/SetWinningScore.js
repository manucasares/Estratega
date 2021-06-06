import React from 'react'
import { useDispatch } from 'react-redux';

import { setWinningScore } from '../../actions/config';
import { changeSectionScreen } from '../../actions/ui';
import { changeScreenWithAnimation } from '../../helpers/changeScreen';


export const SetWinningScore = () => {

    const dispatch = useDispatch();

    const cards = [ 25, 50, 100 ];

    const handleClick = ( score ) => {

        dispatch( setWinningScore( score ) );

        dispatch( changeSectionScreen( 'game_logic' ) );

        changeScreenWithAnimation( 'set_winning_score', 'set_choices', dispatch, 'animate__backInRight' );
    }

    return (
        <section
            className="set-winning-score-container animate__animated animate__backInRight"
            id="set_winning_score"
        >

            <h3 className="fz-medium">Seleccione el puntaje para ganar.</h3>

            <div className="cards-container">
                {
                    cards.map( card => (
                        <div
                            key={ card }
                            className="card"
                            onClick={ () => handleClick( card ) }
                        >
                            { card }
                        </div>
                    ) )
                }
            </div>
        </section>
    )
}
