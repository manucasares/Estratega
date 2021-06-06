import React, { useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { changePlayerSelector, setChoice } from '../../actions/players';
import { changeScreenWithoutAnimation } from '../../helpers/changeScreen';
import { BackArrow } from './BackArrow';


export const SetChoice = () => {

    const { players, playerSelector } = useSelector( state => state.players );
    const { currentCardsDealt } = useSelector( state => state.config );
    const dispatch = useDispatch();

    const [ showFinishChoosing, setShowFinishChoosing ] = useState(false);
    const notPossibleChoice = useRef();
    const winCount = useRef();

    const { name, id, choice: playerChoice } = players[ playerSelector ];

    // Creamos el array con las opciones que tiene el player y le agregamos una opción más
    const choices = [ ...Array( currentCardsDealt ).keys() ];
    choices.push( choices.length );

    // Contamos la cantidad de "ganar" elegidas
    winCount.current = players.map( player => player.choice ).reduce( ( acc, ct ) => acc + ct );
    winCount.current -= players[ players.length - 1 ].choice

    if ( playerSelector === ( players.length - 1 ) ) {    
        notPossibleChoice.current = currentCardsDealt - winCount.current; 
    }

    const handleChoice = ( choice, id ) => {
        dispatch( setChoice( choice, id ) );

        // 'si es el último jugador'
        if ( playerSelector === ( players.length - 1 ) ) {
            setShowFinishChoosing( true );
            return;
        }

        dispatch( changePlayerSelector( playerSelector + 1 ) );     
    }
    
    const handleFinishChoosing = () => {
        changeScreenWithoutAnimation( 'set_results', dispatch );
    }

    return (
        <section className="section">
            {
                ( playerSelector !== 0 ) &&
                    <BackArrow />
            }

            <div className="set-choices-container animate__animated animate__bounceIn">
                <h2> { name } </h2>
    
                <div className="choices-container">
                    {
                        choices.map( choice => {

                            // si es el último jugador, y la choice podría permitir que todos ganen
                            if ( playerSelector === ( players.length - 1 ) && winCount.current + choice === currentCardsDealt ) {
                                notPossibleChoice.current = choice;
                                return false;
                            }
                         
                            return (

                                <div
                                    className={`card ${ playerChoice === choice && 'active-choice' }`}
                                    onClick={ () => handleChoice( choice, id ) }
                                    key={ choice }
                                >
                                    { choice }
                                </div>
                            )
                        })
                    }
                </div>     
            </div>
    
            {
                ( showFinishChoosing ) &&
                    <i
                        className="icon far fa-arrow-alt-circle-right animate__animated animate__fadeIn"
                        onClick={ handleFinishChoosing }
                    ></i>
            }     
        </section>
    )
}
