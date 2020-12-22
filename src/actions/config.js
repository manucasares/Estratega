import { types } from "../types/types";


export const setNumberOfPlayers = ( number ) => ({
    type: types.configSetNumberOfPlayers,
    payload: number
})

export const setCardLimit = ( limit ) => {
    
    const limitConverted = [ ...Array( limit + 1 ).keys() ].filter( number => number % 2 !== 0 );

    return {
        type: types.configSetCardLimit,
        payload: limitConverted
    }
}

export const setWinningScore = ( score ) => ({
    type: types.configSetWinningScore,
    payload: score
})

export const changeCardsDealt = ( nextCardsDealt ) => ({
    type: types.configChangeCardsDealt,
    payload: nextCardsDealt
})

