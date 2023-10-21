const GET_PH = "events/all"
const CREATE_PH = 'groups/new'


// blah
const getPHAction = (payload) => {
    return {
        type: GET_PH,
        payload
    }
}

const createPHAction = (payload) => {
    return {
        type: CREATE_PH,
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

export const createPHThunk = (payload) => async dispatch => {
    const response = await fetch('/logentries/post',
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })

    const data = await response.json()

    if (response.ok) {
        await dispatch(createPHAction(data))
        return data
    } else { // any bad requests and errors
        return data
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

        case CREATE_PH: { 
            newState = { ...state }
            newState[action.payload.id] = action.payload
            return newState
        }

        default: {
            return state
        }
    }
}


export default phReducer