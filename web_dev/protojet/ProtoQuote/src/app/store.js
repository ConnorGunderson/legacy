import { configureStore } from '@reduxjs/toolkit';

export default configureStore({
  reducer: (state = '', action) => state
});
