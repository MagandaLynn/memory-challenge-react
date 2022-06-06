import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { baseUrl } from "../../app/shared/baseUrl";

export const fetchUsers=createAsyncThunk(
    'users/fetchusers',
    async()=>{
        const response = await fetch(baseUrl + 'users');
        if(!response.ok){
            return Promise.reject('Unable to fetch, status: ' + response.status);

        }
        const data=await response.json();
        return data;
   }
    
)

export const registerUser = createAsyncThunk(
    'users/registerUsers',
    async(userData, {dispatch})=>{
        const response = await fetch(baseUrl + "users", {
            method: "POST", 
            body: JSON.stringify(userData), 
            headers:{'Content-Type': 'application/json'}
        });
        if(!response.ok){
            Promise.reject(response.status)
        }
        const data=await response.json();
        dispatch(addUser(data))

    }

)

const initialState={
    usersArray: [],
    currentUser: null,
    isLoading: true,
    errMsg: '',
    registerIsLoading:true,
    registerErrMsg: '',
}

const usersSlice= createSlice({
    name: "users",
    initialState,
    reducers:{
        setCurrentUser: (state, action) =>{
            const verifiedUser = state.usersArray.find(user=>(user.email===action.payload.email && user.password===action.payload.password))
            return {...state, usersArray: [], currentUser: verifiedUser};
        },
        logoutUser: (state) => {
            return { ...state, currentUser: null }
        },
        addUser: (state, action)=>{
            const newUser={
                ...action.payload
            }
            state.usersArray.push(newUser);
        },
        removeNewStatus:(state)=>{
            state.currentUser= {...state.currentUser, new: false}
        }
    },
    extraReducers: {
        [fetchUsers.pending]: (state) => {
            state.isLoading=true;
        },
        [fetchUsers.fulfilled]: (state, action)=> {
            state.isLoading=false;
            state.errMsg='';
            state.usersArray=action.payload;
        },
        [fetchUsers.rejected]: (state, action) =>{
            state.isLoading=false;
            state.errMsg = "Unable to validate user at this time";
            console.log(state.errMsg);
        },
        [registerUser.pending]: (state) => {
            state.registerIsLoading=true;
        },
        [registerUser.fulfilled]: (state, action)=> {
            state.registerIsLoading=false;
            state.registerErrMsg='';

        },
        [registerUser.rejected]: (state, action) =>{
            state.registerIsLoading=false;
            state.registerErrMsg = "Unable to validate user at this time";
            console.log(state.registerErrMsg);
        }

    }
})

export const usersReducer= usersSlice.reducer;
export const {setCurrentUser, addUser, removeNewStatus} = usersSlice.actions;
export const selectCurrentUser = (state) =>{
    return state.users.currentUser
}