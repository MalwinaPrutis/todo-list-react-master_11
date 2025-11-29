// src/features/tasks/TaskListPage.js

import React from "react";
import Form from "../../common/Form";
// OSTATECZNA POPRAWKA: Prawidłowy import TasksList.js (pliki są obok siebie w folderze 'tasks')
import TasksList from "./TasksList.js"; 
import Buttons from "../../common/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";

const TaskListPage = () => ( 
  <>
    <Header title="Lista zadań" />
    <Section title="Dodaj nowe zadanie" body={<Form />} />
    <Section title="Lista zadań" body={<TasksList />} extraHeaderContent={<Buttons />} />
  </>
);

export default TaskListPage;