import { RESPONSE_THEME, FAILED_THEME } from "../types/theme"


const initialState = {
    theme: null
}

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case RESPONSE_THEME:
            return { ...state, theme: action.payload }
        case FAILED_THEME:
            return { ...state, theme: action.payload }
        default:
            return state
    }
}