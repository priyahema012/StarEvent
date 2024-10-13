
import { configureStore } from "@reduxjs/toolkit";
import rootReducers from '../configs/Rootreducer'; 

export const store = configureStore({ reducer: rootReducers });
