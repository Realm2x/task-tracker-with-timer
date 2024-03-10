import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const STA_DAT_KEY = 'sdk'

export interface IStatisticData {
  currentDate: string;
  timeWorking: number;
  quantityPomidoro: number;
  focus: number;
  stops: number;
  timeOnPause: number;
  quantityTimeOnPause: number;
}

export const initialState = [] as IStatisticData[];

export const statistickDataSlice = createSlice({
  name: 'statistickData',
  initialState,
  reducers: {
    dataAdd: {
      reducer: (state, action: PayloadAction<IStatisticData>) => {
        const newState = state.find((e) => e.currentDate === action.payload.currentDate)
        if (!newState) {
          state.push(action.payload);
          localStorage.setItem(STA_DAT_KEY, JSON.stringify(state));
        }
      },
      prepare: (currentDate: string) => ({
        payload: {
          currentDate,
          timeWorking: 0,
          quantityPomidoro: 0,
          focus: 0,
          stops: 0,
          timeOnPause: 0,
          quantityTimeOnPause: 0,
        } as IStatisticData
      }),
    },
    timeWorking: (state, action) => {
      state.map((e) => e.currentDate === action.payload.formattedDate ? e.timeWorking = e.timeWorking + action.payload.pomidoroDuration : e);
      localStorage.setItem(STA_DAT_KEY, JSON.stringify(state));
    },
    timeQuantityPomidoro: (state, action: PayloadAction<string>) => {
      state.map((e) => e.currentDate === action.payload ? e.quantityPomidoro += 1 : e);
      localStorage.setItem(STA_DAT_KEY, JSON.stringify(state));
    },
    stopsQuantity: (state, action) => {
      state.map((e) => e.currentDate === action.payload ? e.stops += 1 : e);
      localStorage.setItem(STA_DAT_KEY, JSON.stringify(state));
    },
    timeOnPause: (state, action) => {
      state.map((e) => e.currentDate === action.payload.formattedDate ? e.timeOnPause = action.payload.miliseconds : e);
      localStorage.setItem(STA_DAT_KEY, JSON.stringify(state));
    },
    quantityTimeOnPause: (state, action) => {
      state.map((e) => e.currentDate === action.payload.formattedDate ? e.quantityTimeOnPause = Math.floor(Math.abs(action.payload.miliseconds - e.timeOnPause) / (1000 * 60)) : e);
      localStorage.setItem(STA_DAT_KEY, JSON.stringify(state));
    },
  }
})

export const { dataAdd, timeWorking, timeQuantityPomidoro, stopsQuantity, timeOnPause, quantityTimeOnPause } = statistickDataSlice.actions
export default statistickDataSlice.reducer