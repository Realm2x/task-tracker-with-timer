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
  activeDay: boolean;
}

export const initialState = [] as IStatisticData[];

export const statisticDataSlice = createSlice({
  name: 'statisticData',
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
          activeDay: false,
        } as IStatisticData
      }),
    },
    timeWorking: (state, action) => {
      state.map((e) => e.currentDate === action.payload ? e.timeWorking += 1 : e);
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
    timeFocus: (state, action) => {
      state.map((e) => e.currentDate === action.payload ? e.focus = Math.floor(e.timeWorking / (e.quantityTimeOnPause + e.timeWorking) * 100) : e);
      localStorage.setItem(STA_DAT_KEY, JSON.stringify(state));
    },
    timeOnPause: (state, action) => {
      state.map((e) => e.currentDate === action.payload.formattedDate ? e.timeOnPause = action.payload.miliseconds : e);
      localStorage.setItem(STA_DAT_KEY, JSON.stringify(state));
    },
    quantityTimeOnPause: (state, action) => {
      state.map((e) => {
        if (e.currentDate === action.payload) {
          const pauseTime = e.timeOnPause;
          const currentTime = Date.now();
          e.quantityTimeOnPause += Math.floor((currentTime - pauseTime) / (1000 * 60));
        }
        return e;
      });
      localStorage.setItem(STA_DAT_KEY, JSON.stringify(state));
    },
    activeDay: (state, action) => {
      state.map((e) => e.currentDate === action.payload ? e.activeDay = true : e.activeDay = false);
    },
  }
})

export const { dataAdd, timeWorking, timeQuantityPomidoro, stopsQuantity, timeFocus, timeOnPause, quantityTimeOnPause, activeDay } = statisticDataSlice.actions
export default statisticDataSlice.reducer