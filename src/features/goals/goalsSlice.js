import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { act } from "react-dom/test-utils";
import { baseUrl } from "../../app/shared/baseUrl";

export const loadUserGoals = createAsyncThunk(
    'goals/loadUserGoals',
    async () => {
        const response = await fetch(baseUrl + "goals")
        if(!response.ok){
            Promise.reject(response.status)

        }
        const data=await response.json();
        return data;
    }
)

export const addUserGoal = createAsyncThunk(
    'goals/addUserGoal',
    async(userGoal, {dispatch})=>{
        console.log(userGoal)
        const response = await fetch(baseUrl + "goals", {
            method: "POST", 
            body: JSON.stringify(userGoal), 
            headers:{'Content-Type': 'application/json'}
        });
        if(!response.ok){
            Promise.reject(response.status)
        }
        const data=await response.json();

        dispatch(addGoal(data))
    }
)

export const completeUserGoal = createAsyncThunk(
    'goals/completeUserGoal',
    async(goal, {dispatch})=>{
        console.log("GOAL:",goal)
        const response = await fetch(baseUrl + "goals/" + goal.id, {
            method: "PATCH", 
            body: JSON.stringify({"completed": true}), 
            headers:{'Content-Type': 'application/json'}
        });
        if(!response.ok){
            Promise.reject(response.status)
        }
        const data=await response.json();

        dispatch(completeGoal(data))
    }
)
const initialState={
    goalsArray: [],
    currentUserEmail: '',
    goalsLoading: false,
    goalsErrMsg: ''
}

const goalsSlice = createSlice({
    name: "goals",
    initialState,
    reducers:{
        setUser:(state,action)=>{
            state.currentUserEmail=action.payload;
            
        },
        addGoal: (state, action) => {
            const newGoal={...action.payload}
            state.goalsArray.push(newGoal)
            
        },
        completeGoal: (state,action) => {
            const updatedArray=state.goalsArray.filter(goal=>goal.id!=action.payload.id)
            state.goalsArray=[...updatedArray, action.payload]
            
        }
    },
    extraReducers: {
        [loadUserGoals.pending]: (state)=>{
            state.goalsLoading=true;
        },
        [loadUserGoals.fulfilled]: (state,action)=>{
            state.goalsLoading=false;
            state.goalsErrMsg=''
            state.goalsArray=action.payload.filter(goal=>goal.user===state.currentUserEmail);
        },
        [loadUserGoals.rejected]: (state,action)=>{
            state.goalsLoading=false;
            state.goalsErrMsg=action.payload;
        }

    }
})

export const goalsReducer= goalsSlice.reducer;
export const {setUser, addGoal, completeGoal} = goalsSlice.actions;

export const selectCurrentUserGoals = (state)=>{

    return state.goals.goalsArray.filter(goal=>!goal.completed)

}

export const selectCompletedUserGoals = (state)=>{
    return state.goals.goalsArray.filter(goal=>goal.completed)
 
}