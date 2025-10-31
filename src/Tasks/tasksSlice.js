import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: "tasks",
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTask: (state, { payload: task }) => {
            state.tasks.push(task);
        },
        toggleTaskDone: (state, { payload: taskId }) => {
            const index = state.tasks.findIndex(({ id }) => id === taskId);
            state.tasks[index].done = !state.tasks[index].done;
        },
        removeTask: (state, { payload: taskId }) => {
            state.tasks = state.tasks.filter(({ id }) => id !== taskId);
        },
        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },
        setAllDone: (state) => {
            state.tasks.forEach((task) => {
                task.done = true;
            });
        },
    },
});

export const {
    addTask,
    toggleTaskDone,
    removeTask,
    toggleHideDone,
    setAllDone,
} = tasksSlice.actions;

export default tasksSlice.reducer;

export const selectTasksState = (state) => state.tasks;
export const selectTasks = (state) => selectTasksState(state).tasks;
export const selectHideDone = (state) => selectTasksState(state).hideDone;
export const selectAreTasksEmpty = (state) =>
    selectTasks(state).length === 0;

export const selectIsEveryTaskDone = (state) =>
    selectTasks(state).every(({ done }) => done);

export const selectIsEveryTaskUndone = (state) =>
    selectTasks(state).every(({ done }) => !done);