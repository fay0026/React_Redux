import { createSlice } from "@reduxjs/toolkit";

const initialState = { notifList: [], lastId: 0 };

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    create(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.lastId += 1;
      state.notifList.push({ ...action.payload, id: state.lastId });
    },
    hide(state, action) {
      console.log(action.payload);
      action.payload(false);
    },
    remove(state, action) {
      state.notifList.pop(action.payload);
      // eslint-disable-next-line no-param-reassign
      state.lastId -= 1;
    },
  },
});

export const { create, hide, remove } = notificationSlice.actions;
export default notificationSlice.reducer;
