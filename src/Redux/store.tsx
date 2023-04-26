import { combineReducers, configureStore } from "@reduxjs/toolkit";
import pet from './petsSlice'
const reducer = combineReducers({
    pet
  })
const store = configureStore({
    reducer
})

export default store