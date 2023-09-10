import { configureStore } from "@reduxjs/toolkit";
import imagePreviewSlice from "./imagePreviewSlice";
import popupSlice from "./popupSlice";

const store = configureStore({
    reducer: {
        imagePreview: imagePreviewSlice,
        popup: popupSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;