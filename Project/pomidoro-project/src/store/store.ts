import { configureStore } from '@reduxjs/toolkit'
import taskReducer, { REC_FAV_KEY } from './task/taskSlice'
import modalDeleteReducer from './modalDelete/modalSlice'
import modalSettingsReducer, { REC_SET_KEY, initialState } from './modalSettings/modalSettings'

const taskState = JSON.parse(localStorage.getItem(REC_FAV_KEY) || '[]');
const settingsState = JSON.parse(localStorage.getItem(REC_SET_KEY) || '{}');

export const store = configureStore({
  preloadedState: {
    task: taskState === '[]' ? {task: []} : taskState,
    modalSettings: settingsState.pomidoroDuration ? settingsState : initialState,
  },
  reducer: {
    task: taskReducer,
    modal: modalDeleteReducer,
    modalSettings: modalSettingsReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
