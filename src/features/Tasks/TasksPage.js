// src/features/tasks/TasksPage.js

import React from "react";
// Importy z Twoich nowych lokalizacji (dostosowane do tego, jak przeniosłaś pliki):
import Form from "../../common/Form";
import TasksList from "./Tasks/TasksList"; // Uwaga: Importujemy TasksList.js z podfolderu Tasks/
import Buttons from "../../common/Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";

const TasksPage = () => (
  <>
    <Header title="Lista zadań" />
    <Section title="Dodaj nowe zadanie" body={<Form />} />
    <Section title="Lista zadań" body={<TasksList />} extraHeaderContent={<Buttons />} />
  </>
);

export default TasksPage;