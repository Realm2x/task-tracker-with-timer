import { PayloadAction, createSlice } from '@reduxjs/toolkit'

interface IModalDelete {
  modal: boolean;
  id: string;
}

const initialState: IModalDelete = {
  modal: false,
  id: ''
};

export const modalDeleteSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    modalAdd: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
    },
    modalAddId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    },
    modalRemove: (state, action: PayloadAction<boolean>) => {
      state.modal = action.payload;
    },
    modalRemoveId: (state, action: PayloadAction<string>) => {
      state.id = action.payload;
    }
  },
})

export const { modalAdd, modalAddId, modalRemove, modalRemoveId } = modalDeleteSlice.actions
export default modalDeleteSlice.reducer