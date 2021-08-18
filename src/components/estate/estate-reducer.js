import {developmentsApi} from "../../api/developments-api";

const initialState  = {
    homes: [],
}

export const estateReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET-ESTATE":
            return { ...state, homes: action.payload}
        default:
            return state
    }
}

// actions
export const setEstateAC = (estate) => ({ type: 'SET-ESTATE', payload: estate })

//thunks
export const fetchEstateTC = () => (dispatch) => {
    developmentsApi.getEstate()
        .then((res)=>{
            dispatch(setEstateAC(res.data))
        })
        .catch((error) =>{
            console.log('some error occured')
        })
}
