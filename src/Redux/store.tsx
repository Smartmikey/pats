import { configureStore } from "@reduxjs/toolkit";
import petReducer from './petsSlice'
export default configureStore({
    reducer: {
        petReducer: petReducer
    }
})