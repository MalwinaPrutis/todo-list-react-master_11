import Form from "./common/Form";
import TasksList from "./features/Tasks/TasksList";
import Buttons from "./Buttons";
import Section from "./common/Section";
import Header from "./common/Header";
import { Container } from './common/Container';

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