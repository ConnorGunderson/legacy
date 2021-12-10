export const updatePreviewer = (text) => {
    return ({
        type: "UPDATE_PREVIEWER",
        payload: {
            text: text
        }
    })
}

export const editorReducer = (state = '', action) => {
    switch(action.type) {
        case 'UPDATE_PREVIEWER':
            return action.payload.text
        default:
            return state
    }
}