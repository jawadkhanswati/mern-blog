import { createSlice } from "@reduxjs/toolkit";

const initialState={
    currentUser:null,
    error:null,
    loading:false
}

const userSlice=createSlice({
    name:"User",
    initialState,
    reducers:{
        signinStart:(state)=>{
            state.loading=true;
            state.error=null
        },

        signinSuccess:(state,action)=>{
            state.currentUser=action.payload;
            console.log(action.payload)
            state.loading=false;
            state.error=null
        },
        
        signInfailure:(state,action)=>{
            state.loading=false;
            state.error=action.payload;
        }
    }
})

export const {signinStart,signinSuccess,signInfailure}=userSlice.actions;
export default userSlice.reducer;