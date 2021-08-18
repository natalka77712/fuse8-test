import {developmentsApi} from "../../api/developments-api";

const initialState  = {
    homes: [],
}

export const courtReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET-COURT":
            return { ...state, homes: action.payload}
        default:
            return state
    }
}

// actions
export const setCourtsAC = (courts) => ({ type: 'SET-COURT', payload: courts })

//thunks
export const fetchCourtTC = () => (dispatch) => {
    developmentsApi.getCourts()
        .then((res)=>{
            dispatch(setCourtsAC(res.data))
        })
        .catch((error) =>{
            console.log('some error occured')
        })
}
