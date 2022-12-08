import {ADD_CARD, DELETE_CARD, FILTER, ORDER} from './types';

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

export function filterCards(status){
    return({
        type: FILTER,
        payload: status,
    })
}

export function orderCard(id){
    return({
        type: ORDER,
        payload: id,
    })
}