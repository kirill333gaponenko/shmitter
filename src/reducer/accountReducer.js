
import {CHANGESTATS,CHANGENAME,CHANGEAVATAR} from "../action/accountAction.js";

export const accountReducer =(state,action)=>{
    const Keys = Object.keys(state)
    const innerKeyUser = Object.keys(Keys[0])
    const innerKeyStats = Object.keys(Keys[1])

    console.log(state)
    switch(action.type){
        case CHANGESTATS:
        {
            const res = state.stats[action.payload[0]] + action.payload[1];

            console.log(state.stats[action.payload[0]])
            return {...state,...state[Keys[1]],[action.payload[0]]: res < 0 ? 0 : res}
        }


        case CHANGENAME :
            return {...state,...state[Keys[0]],name:action.payload||state[Keys[0]].name};
        case CHANGEAVATAR :
            return {...state,...state[Keys[0]],avatar:action.payload||state[Keys[0]].avatar}
        default:
            return state;
    }
}
