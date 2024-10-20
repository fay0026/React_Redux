import { createSlice } from "@reduxjs/toolkit";
import { number } from "prop-types";

// Record possible pour une id par notification
const initialState = { notifList: [], lastId: 0, isDrawerOpen: false };

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
      });
    },
    remove(state, action) {
      // eslint-disable-next-line no-param-reassign
      state.notifList = state.notifList.filter(
        (notification) => notification.id !== action.payload,
      );
    },
    reset(state) {
      state.notifList = [];
    },
    toggleDrawer(state) {
      state.isDrawerOpen = !state.isDrawerOpen;
    },
  },
});

export const { create, hide, remove } = notificationSlice.actions;
export default notificationSlice.reducer;
