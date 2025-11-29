// src/features/tasks/TaskListPage.js

import React from "react";
import Form from "../../common/Form";
// OSTATECZNA POPRAWKA: Używamy TasksList (Duże T) z tego samego folderu.
import TasksList from "./TasksList"; 
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