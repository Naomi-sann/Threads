import { configureStore } from "@reduxjs/toolkit";
import imagePreviewSlice from "./imagePreviewSlice";

const store = configureStore({
    reducer: {
        imagePreview: imagePreviewSlice,
    }
})

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;