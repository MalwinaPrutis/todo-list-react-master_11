import Form from "./features/tasks/Form";
import TasksList from "./features/tasks/TasksList";
import Buttons from "./features/tasks/Buttons";
import Section from "./common/Section";
import Header from "./common/Header";
import { Container } from "./common/Container/styled";

function App() {
  return (
    <Container>
      <Header title="Lista zadań" />

      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<TasksList />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
}

export default App;