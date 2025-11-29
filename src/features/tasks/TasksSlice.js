// src/features/tasks/tasksSlice.js - POPRAWIONY KOD

import { createSlice } from "@reduxjs/toolkit";

const loadTasksFromLocalStorage = () => {
    try {
        const tasks = localStorage.getItem("tasks");
        return tasks ? JSON.parse(tasks) : [];
    } catch (error) {
        console.error("Błąd ładowania stanu z Local Storage:", error);
        return [];
    }
};

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: loadTasksFromLocalStorage(),
        hideDone: false,
        loading: false, 
    },
    reducers: {
        addTask: (state, { payload: task }) => {
            state.tasks.push(task);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        toggleTaskDone: (state, { payload: taskId }) => {
            const index = state.tasks.findIndex(({ id }) => id === taskId);
            if (index >= 0) {
                state.tasks[index].done = !state.tasks[index].done;
            }
        },
        removeTask: (state, { payload: taskId }) => {
            state.tasks = state.tasks.filter(({ id }) => id !== taskId);
        },
        setAllDone: (state) => {
            state.tasks.forEach(task => {
                task.done = true;
            });
        },
        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },
        fetchExampleTasks: (state) => {
            state.loading = true;
        },
        fetchExampleTasksSuccess: (state, { payload: tasks }) => {
            state.tasks = tasks;
            state.loading = false;
        },
        fetchExampleTasksError: (state) => {
            state.loading = false;
        },
    },
});

export const { 
    addTask, 
    toggleHideDone, 
    toggleTaskDone, 
    removeTask, 
    setAllDone, 
    setTasks,
    fetchExampleTasks,
} = tasksSlice.actions;

export const selectTasksState = state => state.tasks;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectIsEveryTaskDone = state => selectTasks(state).every(({ done }) => done);
// NOWY WYMAGANY EKSPORT (BŁĄD Z selectAreTasksEmpty):
export const selectAreTasksEmpty = state => selectTasks(state).length === 0;

export default tasksSlice.reducer;