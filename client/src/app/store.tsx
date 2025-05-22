import { configureStore } from '@reduxjs/toolkit'
import ProfileReducer from "./features/login/authenticate"

export const store = configureStore({
  reducer: {profile: ProfileReducer},
})

export type AppStore = typeof store
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']