import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2';

import { setPlayers } from '../../actions/players';
import { hideSetPlayers } from '../../actions/ui';
import { useForm } from '../../hooks/useForm';

export const SetPlayersNames = () => {

    const { totalPlayers } = useSelector( state => state.config );
    const dispatch = useDispatch();

    let playersObj = {};

    [ ...Array( totalPlayers ) ].forEach( ( player, i ) => {

        playersObj = {
            ...playersObj,
            [ `player${ i + 1 }` ]: ''
        }
    })

    const [ formValues, handleInputChange ] = useForm({
        ...playersObj
    })

    const handleSubmit =  (e) => {
        e.preventDefault();
        
        // Comprobamos si algún campo está vacio
        const someFieldIsEmpty = [ ...Object.values( formValues ) ].some( name => !name );

        // Si está vacío retornamos
        if ( someFieldIsEmpty ) {
            Swal.fire( 'Error', 'Hay campos sin completar', 'error' );
            return;
        }

        const players = [];

        // Creamos el objeto con los players
        Object.values( formValues ).forEach( ( player, i ) => {

            players.push({
                id: i,
                name: player,
                score: [ 0 ],
                won: null,
                choice: null
            });
        })

        // UX
        const set_players = document.getElementById('set_players');
        set_players.classList.remove('animate__fadeIn');
        set_players.classList.add('animate__backOutLeft');
    
        dispatch( setPlayers( players ) );

        setTimeout(() => {
            dispatch( hideSetPlayers() );
        }, 500);
    }
    
    return (
        <div
            className="animate__animated animate__backInRight animate__fast"
            id="set_players"
        >
            
            <h4>Establezcan quién va a decidir primero en el primer turno.</h4>
            <p>Agreguen los jugadores en el orden que corresponda.</p>

           <form onSubmit={ handleSubmit } >

                {
                    [ ...Array( totalPlayers ) ].map( (e, i) => (
                        
                        <input
                            type="text"
                            className="input"
                            name={ `player${ i + 1 }` }
                            key={ i }
                            onChange={ handleInputChange }
                            value={ formValues[i] }
                            autoComplete="off"
                        />
                    ))
                }

                <button
                    type="submit"
                    className="btn btn-light mt-3"
                >
                    Siguiente
                </button>
           </form>
        </div>
    )
}
