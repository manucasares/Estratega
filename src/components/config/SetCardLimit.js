import React from 'react'
import { useDispatch } from 'react-redux';

import { setCardLimit } from '../../actions/config';
import { changeScreenWithAnimation } from '../../helpers/changeScreen';

export const SetCardLimit = () => {

    const dispatch = useDispatch();

    const card_options = [ 3, 5, 7, 9 ];

    const handleClick = ( value ) => {

        dispatch( setCardLimit( value ) );

        changeScreenWithAnimation( 'set_card_limit', 'set_winning_score', dispatch );
    }

    return (
        <section
            className="set-card-limit-container animate__animated animate__backInRight"
            id="set_card_limit"
        >
           
            <h3 className="fz-medium title--center">Seleccione el límite de cartas.</h3>

            <div className="cards-container">

                {
                    card_options.map( option => (

                        <div
                            className="card"
                            onClick={ () => handleClick( option ) }
                            key={option}
                        >
                            { option }
                        </div>
                    ))
                }
            </div>
        </section>
    )
}
