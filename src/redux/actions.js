import {types} from "./types";


function changeTitleAction () {
    return {
        type: types.CHANGE_TITLE
    }
}


export function sayHelloAction () {
    return function (dispatch) {
        setTimeout(() => {
            dispatch(changeTitleAction())
        }, 3000)
    }
}


function photosInfo (photosArr) {

    return {
        type: types.GET_PHOTOS,
        payload: photosArr
    }

}

export function getPhotosAction () {
    return async function(dispatch) {
        const response = await fetch(`https://jsonplaceholder.typicode.com/photos`)
        const photos = await response.json()
        dispatch(photosInfo(photos))
    }
}


function itemInfo (obj) {

    return {
        type: types.ITEM,
        payload: obj
    }
}

export function itemAction(id){
    return async function(dispatch) {
        const load = await fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
        const items = await load.json()
        dispatch(itemInfo(items))
    }
}