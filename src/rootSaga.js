// src/features/tasks/tasksSaga.js

import { takeLatest, call, put, delay } from "redux-saga/effects"; // DODANO delay
import { fetchExampleTasks, setTasks } from "./TasksSlice";
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

export function* tasksSaga() {
    yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
}