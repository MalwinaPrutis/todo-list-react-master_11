// src/rootSaga.js

import { all } from "redux-saga/effects";
import { tasksSaga } from "./features/tasks/tasksSaga"; // Importujemy tasksSaga

export default function* rootSaga() {
    yield all([
        tasksSaga(), // Uruchamiamy Saga dla zadań
    ]);
}