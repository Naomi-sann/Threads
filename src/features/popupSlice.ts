import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const enum PopupTypes {
    ALERT_POPUP,
    BOTTOM_NAV
}

export interface IOption { id: number, title: string; color?: "tomato-red" | "black"; onClick?: () => void }


interface IState {
    isOpened: boolean;
    type: PopupTypes | null;
    config: {
        closeOnBackgroundClick?: boolean
        duration?: number
    },
    options: (IOption | IOption[])[]
}

const initialState: IState = {
    isOpened: false,
    type: null,
    config: {},
    options: []
}

const popupSlice = createSlice({
    name: "popup",
    initialState,
    reducers: {
        openPopup(state, { payload: { type, config: { closeOnBackgroundClick, duration }, options } }: PayloadAction<Omit<IState, "isOpened">>) {
            return { isOpened: true, type, config: { closeOnBackgroundClick, duration }, options }
        },
        closePopup() {
            return initialState
        },
    }
});

export { PopupTypes };
export const { openPopup, closePopup } = popupSlice.actions
export default popupSlice.reducer;