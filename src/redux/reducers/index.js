import {combineReducers} from "redux";
import titleReducer from "./titleReducer";
import photosReducer from "./photosReducer";
import itemReducer from "./itemReducer";



export const rootReducer = combineReducers( {
    titleReducer,
    photosReducer,
    itemReducer,
})