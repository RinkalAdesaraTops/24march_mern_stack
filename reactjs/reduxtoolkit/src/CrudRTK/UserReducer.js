import { createSlice } from '@reduxjs/toolkit'
import React from 'react'
const initialState = {
    data:[]
}
const UserReducer = createSlice({
    name:'user',
    initialState,
    reducers:{
        add:(state,action)=>{
            state.data = [
                ...state.data,
                action.payload
            ]
        },
        upd:(state,action)=>{
            state.data = state.data.map((i,index)=>{
                        if(index == action.payload.id){
                            i = action.payload.data
                        }
                        return i
            })
        },
        del:(state,action)=>{
                state.data = state.data.filter((i,index)=>{
                        return index != action.payload
                })
        }
    }
})
export const {add,del,upd} = UserReducer.actions
export default UserReducer.reducer
