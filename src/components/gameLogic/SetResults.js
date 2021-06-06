import React from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { setRoundLose, setRoundWin, setScores } from '../../actions/players';
import { changeScreenWithoutAnimation } from '../../helpers/changeScreen';


export const SetResults = () => {

    const { players } = useSelector( state => state.players );
    const dispatch = useDispatch();

    const handleWin = ( id ) => {   
        dispatch( setRoundWin( id ) );
    }
    
    const handleLose = ( id ) => {
        dispatch( setRoundLose( id ) );
    }

    const handleFinishSetResults = () => {
        dispatch( setScores() );
        changeScreenWithoutAnimation( 'scores', dispatch );
    }

    return (
        <section className="set-results section m5r0">
            {
                players.map( ({ name, choice, id, won }) => (
    
                    <div
                        className="result"
                        key={ id }
                    >

                        <div className="name-choice">
                            <h3 className="name">{ name }</h3>
                            <p className="choice">Eligió: <span>{ choice }</span></p>
                        </div>

                        <div className="buttons">
                            <button
                                className={`button ${ won && 'active-result' }`}
                                onClick={ () => handleWin( id ) }
                            >
                                <i className="fas fa-check"></i>
                            </button>
    
                            <button
                                className={`button ${ won === false && 'active-result' }`}
                                onClick={ () => handleLose( id ) }
                            >
                                <i className="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
    
                ))
            }

            {
                ( players.every( ({ won }) => won !== null ) )
                    &&  <i
                            className="icon far fa-arrow-alt-circle-right animate__animated animate__fadeIn"
                            onClick={ handleFinishSetResults }
                        ></i>
            }         
        </section>
    )
}
