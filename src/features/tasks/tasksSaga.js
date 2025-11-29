// src/features/tasks/tasksSaga.js

import { takeLatest, call, put, delay } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice"; // Używamy tasksSlice (mała litera)
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
    try {
        yield call(delay, 2000); 
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        console.error("Błąd podczas ładowania przykładowych zadań:", error);
    }
}

// DRUGA FUNKCJA SAGI - DO ZAPISYWANIA W LOCAL STORAGE (Z Twojej wiadomości)
import { takeEvery, select } from "redux-saga/effects";
import { addTask, toggleTaskDone, removeTask, selectTasks } from "./tasksSlice"; 

function* saveTasksInLocalStorage() {
    // Pobieramy aktualne zadania ze stanu Redux
    const tasks = yield select(selectTasks); 
    // Zapisujemy je w Local Storage
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
// ------------------------------------------------------------------------

export function* tasksSaga() {
    // 1. Obsługa ładowania zadań asynchronicznie (z getExampleTasks)
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    
    // 2. Obsługa zapisywania stanu do Local Storage po każdej zmianie zadania
    yield takeEvery([
        addTask.type, 
        toggleTaskDone.type, 
        removeTask.type, 
        setTasks.type // setTask jest używane po załadowaniu danych
    ], saveTasksInLocalStorage);
}