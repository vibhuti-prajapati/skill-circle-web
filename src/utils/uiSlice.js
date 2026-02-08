// store/uiSlice.js
import { createSlice } from '@reduxjs/toolkit'

const uiSlice = createSlice({
  name: 'ui',
  initialState: {
    sidebarPanel: 'connections'
  },
  reducers: {
    setSidebarPanel: (state, action) => {
      state.sidebarPanel = action.payload
    }
  }
})

export const { setSidebarPanel } = uiSlice.actions
export default uiSlice.reducer
