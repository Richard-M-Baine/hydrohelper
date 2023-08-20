const GET_PH = "events/all"



const getHundeAction = (payload) => {
    return {
        type: GET_PH,
        payload
    }
}



export const getHundeThunk = () => async dispatch => {
    console.log('i am here')
    const response = await fetch('/api/kettle/hunde/all')
    const data = await response.json()

    await dispatch(getHundeAction(data))
    return data
}





const initialState = {}

const phReducer = (state = initialState, action) => {
    let newState = {}
    switch (action.type) {
        case GET_PH: {
            action.payload.hunde.forEach(event => {
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