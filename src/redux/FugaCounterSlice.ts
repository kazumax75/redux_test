import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface State {
  value: number
}

const initialState: State = {
  value: 0,
}

export const FugaCounterSlice = createSlice({
  name: 'counter2',
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 2
    },
    decrement: (state) => {
      state.value -= 2
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload
    },
  },
})

export const { increment, decrement, incrementByAmount } = FugaCounterSlice.actions
export default FugaCounterSlice.reducer