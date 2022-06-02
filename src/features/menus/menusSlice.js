import { createSlice } from "@reduxjs/toolkit";
import { CREATEMENU } from "../../app/shared/CREATEMENU";

const initialState = {
    createMenu: CREATEMENU
}

const menuSlice=createSlice({
    name: "menus",
    initialState,
    reducers: {
        
    }
})