import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type ItemsProps = {
  id: number;
  title: string;
  value: number;
  date: string;
  status: string;
  month?: string;
};

interface TextState {
  financers: ItemsProps[];
}

const initialState: TextState = {
  financers: [],
};

const financeSlice = createSlice({
  name: "finance",
  initialState,
  reducers: {
    addFinancer: (
      state,
      action: PayloadAction<{
        id: number;
        date: string;
        title: string;
        status: string;
        month?: string;
        value: number;
      }>
    ) => {
      const financer: ItemsProps = {
        id: action.payload.id,
        date: Date.now().toString(),
        title: action.payload.title,
        status: action.payload.status,
        month: action.payload.month,
        value: action.payload.value,
      };
      state.financers.push(financer);
    },
    editFinance: (state, action: PayloadAction<ItemsProps>) => {
      const { id, date, title, status, month, value } = action.payload;
      const existingFinancer = state.financers.find((item) => item.id === id);
      if (existingFinancer) {
        existingFinancer.date = date;
        existingFinancer.title = title;
        existingFinancer.status = status;
        existingFinancer.month = month;
        existingFinancer.value = value;
      }
    },
    deleteFinancer: (state, action: PayloadAction<string>) => {
      state.financers = state.financers.filter(
        (item) => item.date !== action.payload
      );
    },
  },
});

export const { addFinancer, deleteFinancer, editFinance } = financeSlice.actions;
export const finances = financeSlice.reducer;
