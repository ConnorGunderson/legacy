import { configureStore, combineReducers} from '@reduxjs/toolkit';
import { quoteBoxReducer } from '../features/QuoteBoxSlice';
import { colorReducer } from '../features/Globals';

const rootReducer = combineReducers({
  quote: quoteBoxReducer,
  color: colorReducer
})

export default configureStore({
  reducer: rootReducer
});
