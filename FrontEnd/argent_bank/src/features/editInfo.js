import { createSlice } from "@reduxjs/toolkit";



export const editInfoSlice = createSlice({
    name: "editInfo",

    initialState : {edit: false},
    reducers :{
        toggleEdit: (state) => {
           state.edit = !state.edit
        },
    }
})

export const { toggleEdit } = editInfoSlice.actions;