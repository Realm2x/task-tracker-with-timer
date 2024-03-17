import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid';

export const REC_FAV_KEY = 'rfk'

interface TextState {
  text: string;
  id: string;
  pomidoro: number;
  currentPomidoro: number;
  taskNumber: number;
  taskDone: boolean;
}

const initialState = [] as TextState[];

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    taskAdded: {
      reducer: (state, action: PayloadAction<TextState>) => {
        state.push(action.payload);
        localStorage.setItem(REC_FAV_KEY, JSON.stringify(state))
      },
      prepare: (text: string, taskNumber: number) => ({
        payload: {
          text,
          id: uuidv4(),
          pomidoro: 1,
          currentPomidoro: 1,
          taskNumber,
          taskDone: false
        } as TextState
      }),
    },
    taskDelete: (state, action: PayloadAction<string>) => {
      const index = state.findIndex(e => e.id === action.payload);
      state.splice(index, 1);
      localStorage.setItem(REC_FAV_KEY, JSON.stringify(state));
    },
    taskIncrease: (state, action: PayloadAction<string>) => {
      state.map((e) => e.id === action.payload ? e.pomidoro++ : e);
      localStorage.setItem(REC_FAV_KEY, JSON.stringify(state));
    },
    taskCurrentPomidoro: (state, action: PayloadAction<string>) => {
      state.map((e) => e.id === action.payload ? e.currentPomidoro++ : e);
      localStorage.setItem(REC_FAV_KEY, JSON.stringify(state));
    },
    taskReduce: (state, action: PayloadAction<string>) => {
      state.map((e) => e.id === action.payload ? e.pomidoro-- : e);
      localStorage.setItem(REC_FAV_KEY, JSON.stringify(state));
    },
    taskDone: (state, action: PayloadAction<string>) => {
      state.map((e) => e.id === action.payload ? e.taskDone = true : e);
      localStorage.setItem(REC_FAV_KEY, JSON.stringify(state));
    },
    taskChange: (state, action) => {
      state.map((e) => e.id === action.payload.id ? e.text = action.payload.text : e);
      localStorage.setItem(REC_FAV_KEY, JSON.stringify(state));
    }
  },
})

export const { taskAdded, taskDelete, taskIncrease, taskReduce, taskDone, taskChange } = taskSlice.actions
export default taskSlice.reducer
