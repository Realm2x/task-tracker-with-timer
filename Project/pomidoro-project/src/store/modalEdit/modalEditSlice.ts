import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IModalEdit {
  modal: boolean;
  id: string;
  descr: string;
}

const initialState: IModalEdit = {
  modal: false,
  id: '',
  descr: '',
};

export const modalEditSlice = createSlice({
  name: 'modalEdit',
  initialState,
  reducers: {
    modalEditAdd: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
    },
    modalEditAddId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    modalEditAddText: (state, action: PayloadAction<string>) => {
      state.descr = action.payload;
    },
    modalEditRemoveId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    modalEditRemoveText: (state, action: PayloadAction<string>) => {
      state.descr = action.payload;
    },
  },
})

export const { modalEditAdd, modalEditAddId, modalEditAddText, modalEditRemoveId, modalEditRemoveText } = modalEditSlice.actions
export default modalEditSlice.reducer