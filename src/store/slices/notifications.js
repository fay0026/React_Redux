import { createSlice } from "@reduxjs/toolkit";

const initialState = { notifList: [], lastId: 0 };

const notificationSlice = createSlice({
  name: "notification",
  initialState,
  reducers: {
    create(state, action) {
      state.notifList.push({ ...action.payload, id: state.lastId });

      // eslint-disable-next-line no-param-reassign
      state.lastId += 1;

      // On retourne notre state, dans lequel on
      // créé un nouveau tableau, en l'associant à l'ancien emplacement.
      // Ce tableau est nouvellement créé à partir du payload.
      // ... est le spreader, et permet d'accéder aux éléments d'un tableau
      // sans le modifier.
      /* return {
        ...state,
        notifList: [
          ...state.notifList,
          { ...action.payload, id: state.lastId },
        ],
      }; */
    },
  },
});

export const { create } = notificationSlice.actions;
export default notificationSlice.reducer;
