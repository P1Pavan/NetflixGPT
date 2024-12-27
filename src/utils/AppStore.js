import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./Store/userSlice"


const AppStore = configureStore(
    {
        reducer:{
            user: userReducer,
        },
    }
)

export default AppStore;