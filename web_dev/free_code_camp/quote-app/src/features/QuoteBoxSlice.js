// import Redux from 'redux'
import Quotes from 'quotesy'

const defaultQuote = Quotes.random()

// Actions
export const updateQuote = (quoteObj) => {
    return ({
        type: 'NEW_QUOTE',
        payload: {
            quoteObj: quoteObj
        }
    })
}

// Reducer
export const quoteBoxReducer = (state = defaultQuote, action) => {
    switch(action.type){
        case 'NEW_QUOTE':
            return {...action.payload.quoteObj}
        default:
            return state
    }
}
