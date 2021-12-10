import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { editorReducer } from '../features/editorReducer'

const rootReducer = combineReducers({
  editor: editorReducer
});

export default configureStore({
  reducer: rootReducer
});