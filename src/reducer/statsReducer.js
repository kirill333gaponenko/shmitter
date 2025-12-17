import { CHANGESTATS} from "../action/accountAction.js";
const defaultState = {
    followers:0,
    following:0
}

export const statsReducer =(state=defaultState,action)=>{
    switch (action.type) {
        case CHANGESTATS:
        {
            const res = state[action.payload.statsType] +action.payload.sum;
            return {...state,[action.payload.statsType]: res>=0?res:0};
        }
        default:
            return state;
    }
}