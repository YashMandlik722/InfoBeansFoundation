import { createSlice } from "@reduxjs/toolkit";

const slice = createSlice({
    name:"UserSlice",

    initialState:{
        user:{},
        token:null,
        isLoggedIn:false
    },

    reducers:{
        setUser:(state,action)=>{
            state.user = action.payload;
            state.isLoggedIn = true
            // state.token = action.payload.token;
            delete state.user.password;
        },
        signOut:(state,action)=>{
            state.user = {};
            state.token = null;
            state.isLoggedIn = false;
        }
    }
})

export const {setUser,signOut} = slice.actions;
export default slice.reducer;
