import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";
import { CREATEMENU } from "../../app/shared/CREATEMENU";

// export const loadCreateMenu = createAsyncThunk(
//     'create/loadCreateMenu',
//     async () => {
//         const response = await fetch(baseUrl + "createMenu")
//         if(!response.ok){
//             Promise.reject(response.status)

//         }
//         const data=await response.json();
//         return data;
//     }
// )

const initialState={
    createMenu:CREATEMENU,
}

const createPageSlice=createSlice({
    name: 'create',
    initialState,
    reducers:{

    },
    extraReducers:{
//
    }
})

export const createPageReducer= createPageSlice.reducer;
//export const {setUser, addGoal, completeGoal} = goalsSlice.actions;

export const loadCreateMenu = (state) =>{
    return state.create.createMenu;
}