import { configureStore } from '@reduxjs/toolkit'
import taskReducer, { REC_FAV_KEY } from './task/taskSlice'
import modalDeleteReducer from './modalDelete/modalSlice'
import modalEditReducer from './modalEdit/modalEditSlice'
import statisticDataReducer from './statisticData/statisticData' 
import modalSettingsReducer, { REC_SET_KEY, initialState } from './modalSettings/modalSettings'
import { STA_DAT_KEY } from './statisticData/statisticData'
import choiceWeekReducer from './choiceWeek/choiceWeekSlice'

const taskState = JSON.parse(localStorage.getItem(REC_FAV_KEY) || '[]');
const settingsState = JSON.parse(localStorage.getItem(REC_SET_KEY) || '{}');
const statisticState = JSON.parse(localStorage.getItem(STA_DAT_KEY) || '[]');

export const store = configureStore({
  preloadedState: {
    task: taskState === '[]' ? {task: []} : taskState,
    statistic: statisticState === '[]' ? {statistic: []} : statisticState,
    modalSettings: settingsState.pomidoroDuration ? settingsState : initialState,
  },
  reducer: {
    task: taskReducer,
    statistic: statisticDataReducer,
    modalDelete: modalDeleteReducer,
    modalEdit: modalEditReducer,
    modalSettings: modalSettingsReducer,
    choiceWeek: choiceWeekReducer,
  }
})

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;