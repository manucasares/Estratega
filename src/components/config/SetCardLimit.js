import React from 'react'
import { useDispatch } from 'react-redux';


import { setCardLimit } from '../../actions/config';
import { hideCardLimit } from '../../actions/ui';



export const SetCardLimit = () => {


    const dispatch = useDispatch();

    const card_options = [ 3, 5, 7, 9 ];


    const handleClick = ( value ) => {

        dispatch( setCardLimit( value ) );

        // UX
        const set_card_limit = document.getElementById('set_card_limit');
        set_card_limit.classList.remove('animate__backInRight');
        set_card_limit.classList.add('animate__backOutLeft');

        setTimeout(() => {
            dispatch( hideCardLimit() );
        }, 500);
    }

    return (

        <div
            className="set-card-limit-container animate__animated animate__backInRight"
            id="set_card_limit"
        >
           
            <h3>Seleccione el límite de cartas.</h3>

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

                {/* <div
                    className="card"
                    onClick={ () => handleClick(5) }
                >
                    5
                </div>
                <div
                    className="card"
                    onClick={ () => handleClick(7) }
                >
                    7
                </div>
                <div
                    className="card"
                    onClick={ () => handleClick(9) }
                >
                    9
                </div> */}

            </div>


        </div>
    )
}
