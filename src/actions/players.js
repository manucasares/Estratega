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

export const setRoundWin = ( id ) => ({
    type: types.playersSetRoundWin,
    payload: id
})

export const setRoundLose = ( id ) => ({
    type: types.playersSetRoundLose,
    payload: id
})

export const setScores = () => ({ type: types.playersSetScores })

export const reset = () => ({ type: types.playersReset })

export const changePlayersOrder = () => ({ type: types.playersChangePlayersOrder })