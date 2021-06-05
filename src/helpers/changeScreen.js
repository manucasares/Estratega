import { changeScreen } from "../actions/ui";

export const changeScreenWithAnimation = ( hidingElementId, nextScreen, dispatch, removedClass = 'animate__fadeIn' ) => {

    const elementHiding = document.getElementById( hidingElementId );
    elementHiding.classList.remove( removedClass );
    elementHiding.classList.add('animate__backOutLeft');

    setTimeout(() => {
        dispatch( changeScreen( nextScreen ) );
    }, 500);
}

export const changeScreenWithoutAnimation = ( nextScreen, dispatch ) => {
    dispatch( changeScreen( nextScreen ) );
}
