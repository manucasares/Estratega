import React, { useRef } from 'react';
import { useDispatch } from 'react-redux';

import { setNumberOfPlayers } from '../../actions/config';
import { changeScreenWithAnimation } from '../../helpers/changeScreen';

export const SelectNumberOfPlayers = () => {

    const dispatch = useDispatch();
    const selectRef = useRef();

    // Seteamos la cantidad de players
    const handleSubmit = (e) => {

        e.preventDefault();

        dispatch( setNumberOfPlayers( +selectRef.current.value ) );

        changeScreenWithAnimation( 'select_number_players', 'set_player_names', dispatch );
    }
    
    return (
        <section
            className="animate__animated animate__fadeIn"
            id="select_number_players"
        >
            <h4 className="fz-medium">¿Cuántos jugadores jugarán?</h4>
            <form onSubmit={ handleSubmit }>
                <select className="mt-3" ref={ selectRef }>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                <button className="btn btn-light mt-3">Siguiente</button>
            </form>
        </section>
    )
}
