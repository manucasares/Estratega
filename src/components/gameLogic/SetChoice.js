import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';


import { changePlayerSelector, setChoice } from '../../actions/players';
import { hideSetChoices } from '../../actions/ui';
import { BackArrow } from './BackArrow';


export const SetChoice = () => {

    const { players, playerSelector } = useSelector( state => state.players );
    const { currentCardsDealt } = useSelector( state => state.config );
    const dispatch = useDispatch();


    const [ showFinishChoosing, setShowFinishChoosing ] = useState(false);


    const { name, id, choice: playerChoice } = players[ playerSelector ];

    // Creamos el array con las opciones que tiene el player y le agregamos una opción más
    const choices = [ ...Array( currentCardsDealt ).keys() ];
    choices.push( choices.length );

 

 


    const handleChoice = ( choice, id ) => {

        dispatch( setChoice( choice, id ) );

        // "si es el último jugador"
        if ( playerSelector === ( players.length - 1 ) ) {
            setShowFinishChoosing( true );
            return;
        }

        dispatch( changePlayerSelector( playerSelector + 1 ) );
    }
    

    const handleFinishChoosing = () => {

        dispatch( hideSetChoices() );
    }
 

    return (
        <>

            {
                ( playerSelector !== 0 ) &&
                    <BackArrow />
            }

            <div className="set-choices-container animate__animated animate__bounceIn">
    
                <h2> { name } </h2>
    
                <div className="choices-container">
                    {
                        choices.map( choice => (
    
                            <div
                                className={`card ${ playerChoice === choice && 'active-choice' }`}
                                onClick={ () => handleChoice( choice, id ) }
                                key={ choice }
                            >
                                { choice }
                            </div>
    
                        ))
                    }
                </div>
                
            </div>

            
            {
                ( showFinishChoosing ) &&
                    <i
                        className="far fa-arrow-alt-circle-right animate__animated animate__fadeIn"
                        onClick={handleFinishChoosing}
                    ></i>
            }
            
        </>
    )
}
