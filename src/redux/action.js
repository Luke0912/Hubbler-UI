//action type
export const ADD_RULE = "ADD RULE"


//action creator 

export const addRules = (data)=>{
    return{
        type:ADD_RULE,
        payload:data
    }
}