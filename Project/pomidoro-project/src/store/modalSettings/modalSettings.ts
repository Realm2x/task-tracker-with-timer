import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export const REC_SET_KEY = 'rsk'

export interface IModalSettings {
  modal: boolean;
  pomidoroDuration: number;
  shortBreakDuration: number;
  longBreakDuration: number;
  longBreakFrequency: number;
  notification: boolean;
}

export const initialState: IModalSettings = {
  modal: false,
  pomidoroDuration: 25,
  shortBreakDuration: 3,
  longBreakDuration: 15,
  longBreakFrequency: 4,
  notification: true,
};

export const modalSettingsSlice = createSlice({
  name: 'modalSettings',
  initialState,
  reducers: {
    modalActive: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
      localStorage.setItem(REC_SET_KEY, JSON.stringify(state));
    },
    changesPomidoroDuration: (state, action: PayloadAction<number>) => {
      state.pomidoroDuration = action.payload;
      localStorage.setItem(REC_SET_KEY, JSON.stringify(state));
    },
    changesShortBreakDuration: (state, action: PayloadAction<number>) => {
      state.shortBreakDuration = action.payload;
      localStorage.setItem(REC_SET_KEY, JSON.stringify(state));
    },
    changesLongBreakDuration: (state, action: PayloadAction<number>) => {
      state.longBreakDuration = action.payload;
      localStorage.setItem(REC_SET_KEY, JSON.stringify(state));
    },
    changesLongBreakFrequency: (state, action: PayloadAction<number>) => {
      state.longBreakFrequency = action.payload;
      localStorage.setItem(REC_SET_KEY, JSON.stringify(state));
    },
    changesNotification: (state, action: PayloadAction<boolean>) => {
      state.notification = action.payload;
      localStorage.setItem(REC_SET_KEY, JSON.stringify(state));
    },
  },
})

export const { modalActive, changesPomidoroDuration, changesShortBreakDuration, changesLongBreakDuration, changesLongBreakFrequency, changesNotification } = modalSettingsSlice.actions
export default modalSettingsSlice.reducer