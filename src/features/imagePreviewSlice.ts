import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from "@reduxjs/toolkit";
import type { TPosition } from "@/types";

interface State {
    isShowing: boolean;
    src: string;
    position: TPosition;
    width: number,
    height: number,
}

const initialState: State = { isShowing: false, src: "", position: { x: 0, y: 0 }, width: 0, height: 0 };

const imagePreviewSlice = createSlice({
    name: "imagePreview",
    initialState,
    reducers: {
        openImage(state, { payload: { position, width, height, src } }: PayloadAction<Omit<State, "isShowing">>) {
            return { position, width, height, src, isShowing: true }
        },
        closeImage() {
            return initialState;
        }
    }
});

export const { openImage, closeImage } = imagePreviewSlice.actions;
export default imagePreviewSlice.reducer;