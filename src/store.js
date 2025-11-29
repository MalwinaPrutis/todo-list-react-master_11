// src/store.js

import { configureStore } from "@reduxjs/toolkit";
// POPRAWKA: Zmieniono TasksSlice na tasksSlice (małe litery)
import tasksReducer from "./features/tasks/tasksSlice"; 
import createSagaMiddleware from "redux-saga"; 
import rootSaga from "./rootSaga"; 

const sagaMiddleware = createSagaMiddleware(); 

const store = configureStore({
    reducer: {
        tasks: tasksReducer,
    },
    // Dodajemy middleware Sagas
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

// Uruchamiamy rootSaga po stworzeniu Store!
sagaMiddleware.run(rootSaga);

export default store;