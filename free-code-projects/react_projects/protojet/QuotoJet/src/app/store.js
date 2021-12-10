import { combineReducers, configureStore } from '@reduxjs/toolkit';
import manifoldReducer from '../features/overview-logic/manifoldLogic'
import settingsReducer from '../features/settingsLogic'

const rootReducer = combineReducers({
  manifold: manifoldReducer,
  settings: settingsReducer
})

export default configureStore({
  reducer: rootReducer
});
