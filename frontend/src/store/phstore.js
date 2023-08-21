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
        const logEntries = await res.json();
        
        dispatch(getPHAction({ ph: logEntries })); // Dispatch with logEntries array
        
        return logEntries; // Return the array
    }
}






const initialState = {}

const phReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case GET_PH: {
            const newState = { ...state }; // Create a shallow copy of the previous state
            action.payload.ph.forEach(event => {
                newState[event.id] = event;
            });
            return newState;
        }

        default: {
            return state
        }
    }
}


export default phReducer