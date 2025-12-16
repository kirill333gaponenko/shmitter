
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
            return {...state,
                stats: {
                ...state.stats,
                    [action.payload[0]]: res < 0 ? 0 : res
                }
            }
        }


        case CHANGENAME :
            return {...state,
                user:{...state.user,name:action.payload||state.user.name}
            };
        case CHANGEAVATAR :
            return {...state,
                user:{...state.user,avatar:action.payload||state.user.avatar}

            }
        default:
            return state;
    }
}
