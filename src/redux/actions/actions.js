import {ADD_CARD, DELETE_CARD} from './types';

export function addCard(personaje){
    return({
        type: ADD_CARD,
        payload: personaje,
    })
}

export function deleteCard(id){
    return({
        type: DELETE_CARD,
        payload: id,
    })
}