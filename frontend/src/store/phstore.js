const GET_PH = "events/all"



const getPHAction = (payload) => {
    return {
        type: GET_PH,
        payload
    }
}



export const fetchPhs = () => async dispatch => {
    const res = await fetch('/logentries');
    
   
    if (res.ok) {
        const groups = await res.json();
        
       
        dispatch(getPHAction(groups));
        
        return groups;
    }
}





const initialState = {}

const phReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case GET_PH: {
            action.payload.ph.forEach(event => {
                newState[event.id] = event
            })
            return newState
        }

        default: {
            return state
        }
    }
}


export default phReducer