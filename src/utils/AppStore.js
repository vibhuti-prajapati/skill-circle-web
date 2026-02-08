import { configureStore } from '@reduxjs/toolkit'
import userReducer  from './userSlice.js'
import feedReducer from './feedSlice.js'
import uiReducer from './uiSlice.js'
import pendingRequestReducer from './pendingRequestSlice.js'
import friendReducer from './friendsSlice.js'
export const store = configureStore({
  reducer: {
    user:userReducer,
    feed:feedReducer,
    ui: uiReducer,
    pendingRequest:pendingRequestReducer,
    friend:friendReducer
  },
})