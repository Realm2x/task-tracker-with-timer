import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IChoiceWeekInterface {
  currentWeek: string;
  active: boolean;
  weekDay: number;
}

const initialState: IChoiceWeekInterface[] = [
  { currentWeek: 'Эта неделя', active: true, weekDay: 0 },
  { currentWeek: 'Прошедшая неделя', active: false, weekDay: 7 },
  { currentWeek: '2 недели назад', active: false, weekDay: 14 }
];

export const choiceWeekSlice = createSlice({
  name: 'choiceWeek',
  initialState,
  reducers: {
    choosingTheWeek: (state, action: PayloadAction<string>) => {
      state.forEach((e) => e.active = e.currentWeek === action.payload ? true : false);
    },
  },
})

export const { choosingTheWeek } = choiceWeekSlice.actions
export default choiceWeekSlice.reducer