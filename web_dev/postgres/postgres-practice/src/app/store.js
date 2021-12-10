import { combineReducers, configureStore } from '@reduxjs/toolkit';

// const rootReducer = combineReducers({
//   fooReducer: fooReducer
// })


export default configureStore({
  reducer: (state = '', action) => state 
});
