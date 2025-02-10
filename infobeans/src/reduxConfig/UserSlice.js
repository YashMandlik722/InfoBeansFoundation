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
            console.log(action.payload);
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
