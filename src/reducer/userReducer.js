// type State ={
//     name:string,
//     avatar:string,
// }


import {CHANGEAVATAR, CHANGENAME} from "../action/accountAction.js";
const defaultState = {
    avatar: 'https://gravatar.com/avatar/000?d=monsterid',
    name: 'Monster',
}

export const userReducer =(state =defaultState, action)=>{
    switch(action.type){
        case CHANGEAVATAR:
            return {...state, avatar: action.payload||state.avatar};
        case CHANGENAME:
            return {...state, name: action.payload||state.name};
        default:
            return state;

    }
}