import { createSlice } from "@reduxjs/toolkit";
import { USERS } from '../../app/shared/USERS'

const initialState = {
    usersArray: USERS,
    activeUser: {}
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
        addUser:(state,action)=>{
            console.log(action.payload);
            console.log(state.usersArray);
            const newUser = {
                id: state.usersArray.length+1,
                ...action.payload
            };
            state.usersArray.push(newUser);
            console.log(state.usersArray);
        }
    }
});

export const usersReducer = usersSlice.reducer;

export const { addUser } = usersSlice.actions;

export const getActiveUser = (email, password) => state =>{
    const activeUser=state.users.usersArray.find((user)=>user.email===email);
    if(activeUser.password===password){
        state.users.activeUser=activeUser;
        console.log(state.users.activeUser)
    }
    else{
        console.log("user not found")
    }
      
}