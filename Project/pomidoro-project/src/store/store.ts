import { configureStore } from '@reduxjs/toolkit'
import taskReducer, { REC_FAV_KEY } from './task/taskSlice'
import modalDeleteReducer from './modalDelete/modalSlice'
import modalEditReducer from './modalEdit/modalEditSlice'
import statistickDataReducer from './statistickData/statistickData' 
import modalSettingsReducer, { REC_SET_KEY, initialState } from './modalSettings/modalSettings'
import { STA_DAT_KEY } from './statistickData/statistickData'

const taskState = JSON.parse(localStorage.getItem(REC_FAV_KEY) || '[]');
const settingsState = JSON.parse(localStorage.getItem(REC_SET_KEY) || '{}');
const statistickState = JSON.parse(localStorage.getItem(STA_DAT_KEY) || '[]');

export const store = configureStore({
  preloadedState: {
    task: taskState === '[]' ? {task: []} : taskState,
    statistick: statistickState === '[]' ? {statistic: []} : statistickState,
    modalSettings: settingsState.pomidoroDuration ? settingsState : initialState,
  },
  reducer: {
    task: taskReducer,
    statistick: statistickDataReducer,
    modalDelete: modalDeleteReducer,
    modalEdit: modalEditReducer,
    modalSettings: modalSettingsReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
