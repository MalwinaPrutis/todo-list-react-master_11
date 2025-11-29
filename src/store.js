// src/store.js

import { configureStore } from "@reduxjs/toolkit";
// Upewniamy się, że ścieżka do TasksSlice jest poprawna (folder tasks, plik TasksSlice)
import tasksReducer from "./features/tasks/TasksSlice"; 

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
});

export default store;