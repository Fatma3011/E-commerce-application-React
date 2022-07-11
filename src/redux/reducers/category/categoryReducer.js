import {
    SET_CARTEGORIES,
} from '../../actionTypes'

const initialState = {
    categories: [],
}

const categoryReducer = (state = initialState, action) => {
    if (action.type === SET_CARTEGORIES) {
        console.log("hi")
            return {
                categories: action.categories,
            }
        }
    return {
        categories: [],
    }
    }
export default categoryReducer