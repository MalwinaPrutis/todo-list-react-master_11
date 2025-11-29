// src/features/tasks/tasksSaga.js

import { takeLatest, call, put, delay, takeEvery, select } from "redux-saga/effects"; 
// Poprawiono TasksSlice na tasksSlice (mała litera) i dodano akcje Local Storage:
import { fetchExampleTasks, setTasks, addTask, toggleTaskDone, removeTask, selectTasks } from "./tasksSlice"; 
import { getExampleTasks } from "./getExampleTasks";

// 1. Obsługa ładowania zadań asynchronicznie
function* fetchExampleTasksHandler() {
    try {
        yield call(delay, 2000); 
        const exampleTasks = yield call(getExampleTasks);
        yield put(setTasks(exampleTasks));
    } catch (error) {
        console.error("Błąd podczas ładowania przykładowych zadań:", error);
    }
}

// 2. Obsługa zapisywania w Local Storage
function* saveTasksInLocalStorage() {
    const tasks = yield select(selectTasks);
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
    yield takeEvery([addTask.type, toggleTaskDone.type, removeTask.type, setTasks.type], saveTasksInLocalStorage);
}