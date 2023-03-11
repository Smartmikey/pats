import { createSlice } from "@reduxjs/toolkit";

export const petSlice = createSlice({
    name: "pet",
    initialState: {
        pets: [],
    },
    reducers: {
        addPets: (state, action) => {
            state.pets = action.payload
        }
    }
})

export const {addPets} = petSlice.actions

export default petSlice.reducer