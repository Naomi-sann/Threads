import { configureStore } from "@reduxjs/toolkit";
import imagePreviewSlice from "./imagePreviewSlice";
import popupSlice from "./popupSlice";
import deviceSlice from "./deviceSlice";

const store = configureStore({
    reducer: {
        imagePreview: imagePreviewSlice,
        popup: popupSlice,
        device: deviceSlice
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;