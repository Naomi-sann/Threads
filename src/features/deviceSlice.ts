import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Device = "mobile" | "desktop" | null

interface IState {
    device: Device;
}

const initialState: IState = {
    device: null
}

const deviceSlice = createSlice({
    name: "device",
    initialState,
    reducers: {
        setDevice(state, action: PayloadAction<Device>) {
            return { device: action.payload }
        }
    }
});

export const { setDevice } = deviceSlice.actions;
export default deviceSlice.reducer;