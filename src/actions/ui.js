import { types } from "../types/types"


export const showWinnerScreen = ( id ) => ({
    type: types.uiShowWinnerScreen,
    payload: id
})

export const showDrawText = ( show ) => ({
    type: types.uiShowDrawText,
    payload: show
})

export const toggleShowResultsTab = () => ({ type: types.uiToggleShowResultsTab })


export const changeSectionScreen = ( sectionScreen ) => ({
    type: types.uiChangeSectionScreen,
    payload: sectionScreen
})

export const changeScreen = ( screen ) => ({
    type: types.uiChangeScreen,
    payload: screen
})
