// src/App.js

import React from 'react';
// Ważne: importujemy komponenty do routingu
import { HashRouter, Switch, Route, Redirect } from "react-router-dom"; 

// Link jest importowany z głównego index.js (gdzie pewnie masz styled.a)
import { Link } from "./index.js"; 

// Importujemy stronę z zadaniami (dostosowujemy do nowej struktury)
import TasksPage from './features/tasks/TasksPage'; 
// Importujemy stronę autora (już stworzoną przez Ciebie)
import AuthorPage from './features/author/AuthorPage'; 

// Importujemy stałe ze ścieżkami (ten plik zaraz stworzymy)
import { toTasks, toAuthor } from './routes'; 

// Importujemy ogólny kontener (z nowej lokalizacji)
import Container from "./common/Container/index.js"; 

function App() {
  return (
    <HashRouter>
      <Container>
        {/* Nawigacja z linkami */}
        <nav>
          <ul>
            <li>
              <Link to={toTasks()}>Zadania</Link>
            </li>
            <li>
              <Link to={toAuthor()}>O autorze</Link>
            </li>
          </ul>
        </nav>

        {/* Sekcja routingu, gdzie będą przełączać się strony */}
        <Switch>
          <Route path={toTasks()}>
            <TasksPage />
          </Route>
          <Route path={toAuthor()}>
            <AuthorPage />
          </Route>
          {/* Ustawiamy domyślną stronę (redirect na Zadania) */}
          <Route path="/">
            <Redirect to={toTasks()} />
          </Route>
        </Switch>
      </Container>
    </HashRouter>
  );
}

export default App;