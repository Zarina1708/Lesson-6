import {types} from "../types";


const initialState = {
    item: {}
}


export default function itemReducer(state = initialState, action) {
    switch (action.type) {
        case types.ITEM:
            return {...state, item: action.payload}

        default: return state
    }
}
