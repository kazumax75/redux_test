import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  value: number
}

const initialState: State = {
  value: 13,
}

export const HogeCounterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = HogeCounterSlice.actions
export default HogeCounterSlice.reducer