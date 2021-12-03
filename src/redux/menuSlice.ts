import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from './store'

interface IMenuState
{
    value: boolean;
}

const initialState: IMenuState = {
    value: true
}

export const menuSlice = createSlice(
{
    name: "menu",
    initialState,
    reducers:
    {
        menuChange(state)
        {
            state.value = !state.value;
        }
    }
});

export const { menuChange } = menuSlice.actions;
export const selectMenu = (state: RootState) => state.menu;
export default menuSlice.reducer;
