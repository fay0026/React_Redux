import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slices/notifications";

const store = configureStore({ reducer });

export default store;
