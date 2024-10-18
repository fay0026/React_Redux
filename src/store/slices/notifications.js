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
      // eslint-disable-next-line no-param-reassign
      state.notifList = state.notifList.map((notification) => {
        if (notification.id === action.payload) {
          // eslint-disable-next-line no-param-reassign
          notification.isDisplayed = false;
        }
        return notification;
      });
    },
    remove(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.notifList = state.notifList.filter(
        (notification) => notification.id !== action.payload,
      );
    },
  },
});

export const { create, hide, remove } = notificationSlice.actions;
export default notificationSlice.reducer;
