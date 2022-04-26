export const initialState = {
    basket: [],
    user: null
};

const reducer = (state, action) => {
    switch(action.type){
        default:
            return {
                ...state
            }
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        
    }
}

export default reducer;