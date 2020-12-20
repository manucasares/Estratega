import { types } from "../types/types";


export const setPlayers = ( players ) => ({
    type: types.playersSetPlayers,
    payload: players
})

export const setChoice = ( choice, id ) => ({
    type: types.playersSetChoice,
    payload: {
        choice,
        id
    }
})

export const changePlayerSelector = ( change ) => ({
    type: types.playersChangeSelector,
    payload: change
})