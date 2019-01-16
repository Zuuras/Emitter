const initialState = {
    showedMessage: false
}

function store(state = initialState, action) {
    switch (action.type) {
        case 'SHOW_MESSAGES':
            return{...state, showedMessage: !state.showedMessage}
        default: return state

    }
}

export default store