import { HashRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setTasks } from "./features/tasks/tasksSlice";
import { getExampleTasks } from "./features/tasks/getExampleTasks";
import TasksList from "./features/tasks/TasksList";
import Buttons from "./features/tasks/Buttons";
import Form from "./features/tasks/Form";
import SearchAndFilter from "./features/tasks/SearchAndFilter";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/author/AuthorPage";
import Section from "./common/Section";
import Header from "./common/Header";
import { Container } from "./common/Container/styled";
import Navigation from "./common/Navigation";
import { toTasks, toTask, toAuthor } from "./routes";
import ExampleTasksButton from "./common/ExampleTasksButton";

function App() {
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const onLoadExampleTasksClick = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const exampleTasks = await getExampleTasks();
      dispatch(setTasks(exampleTasks));
    } catch (error) {
      console.error("Błąd podczas pobierania zadań:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <HashRouter>
      <Navigation />
      <Container>
        <Routes>
          <Route
            path={toTasks()}
            element={
              <>
                <Header title="Lista zadań" />
                <Section
                  title="Dodaj nowe zadanie"
                  extraHeaderContent={
                    <ExampleTasksButton
                      onClick={onLoadExampleTasksClick}
                      disabled={loading}
                    >
                      {loading ? "Ładowanie…" : "Pobierz przykładowe zadania"}
                    </ExampleTasksButton>
                  }
                  body={<Form />}
                />
                <SearchAndFilter />
                <Section
                  title="Lista zadań"
                  body={<TasksList />}
                  extraHeaderContent={<Buttons />}
                />
              </>
            }
          />
          <Route path={toTask()} element={<TaskPage />} />
          <Route path={toAuthor()} element={<AuthorPage />} />
        </Routes>
      </Container>
    </HashRouter>
  );
}

export default App;