import { configureStore } from '@reduxjs/toolkit'
import HogeCounterReducer from "./redux/HogeCounterSlice";
import FugaCounterReducer from "./redux/FugaCounterSlice";

export const store = configureStore({
  reducer: {
    hoge: HogeCounterReducer,
    fuga: FugaCounterReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch