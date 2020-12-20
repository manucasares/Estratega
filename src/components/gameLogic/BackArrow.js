import React from 'react'
import { useDispatch, useSelector } from 'react-redux'


import { changePlayerSelector } from '../../actions/players';


export const BackArrow = () => {

    const dispatch = useDispatch();
    const { playerSelector } = useSelector( state => state.players );


    const handleClick = () => {

        dispatch( changePlayerSelector( playerSelector - 1 ) )

    }


    return (
        <i
            className="fas fa-undo-alt animate__animated animate__fadeIn"
            onClick={handleClick}
        ></i>
    )
}
