import { createSlice } from "@reduxjs/toolkit";

const initialState = { notifList: [], lastId: 0 };

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    create(state, action) {
      // On retourne notre state, dans lequel on
      // créé un nouveau tableau, en l'associant à l'ancien emplacement.
      // Ce tableau est nouvellement créé à partir du payload.
      return {
        ...state,
        notifList: [...state.notifList, { ...action.payload }],
      };
    },
  },
});

export const { create } = notificationSlice.actions;
export default notificationSlice.reducer;
