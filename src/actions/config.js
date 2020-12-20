import { types } from "../types/types";


export const setNumberOfPlayers = ( number ) => ({
    type: types.configSetNumberOfPlayers,
    payload: number
})

export const setCardLimit = ( limit ) => ({
    type: types.configSetCardLimit,
    payload: limit
})

export const setWinningScore = ( score ) => ({
    type: types.configSetWinningScore,
    payload: score
})