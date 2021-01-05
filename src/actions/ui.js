import { types } from "../types/types"

// Config
export const hideSelectNumberOfPlayers = () => ({ type: types.uiHideSelectNumberOfPlayers })

export const hideSetPlayers = () => ({ type: types.uiHideSetPlayers })

export const hideCardLimit = () => ({ type: types.uiHideCardLimit })

export const hideSetWinningScore = () => ({ type: types.uiHideSetWinningScore })


// GameLogic
export const hideSetChoices = () => ({ type: types.uiHideSetChoices })

export const hideSetResults = () => ({ type: types.uiHideSetResults })

export const hideResults = () => ({ type: types.uiHideResults })

export const showWinnerScreen = ( id ) => ({
    type: types.uiShowWinnerScreen,
    payload: id
})

export const showDrawText = () => ({ type: types.uiShowDrawText })

export const showResultsTab = () => ({ type: types.uiShowResultsTab })