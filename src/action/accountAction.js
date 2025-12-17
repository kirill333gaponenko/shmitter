export const CHANGEAVATAR = 'changeAvatar';
export const  CHANGENAME = 'changeName'
export const CHANGESTATS ='changeStats'



export const changeAvatar = url =>({

    type:CHANGEAVATAR,
    payload: url,
});

export const changeName = name =>({
    type:CHANGENAME,
    payload: name,
})

export const  changeStats = (statsType, sum) =>({
    type:CHANGESTATS,
    payload: {statsType, sum},
})
