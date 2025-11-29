// src/App.js

import React from 'react';
import styled from "styled-components";
import { HashRouter, Switch, Route, Redirect, NavLink } from "react-router-dom"; 

// Ostateczna ścieżka: folder 'tasks' (małe litery), plik 'TaskListPage.js'.
import TaskListPage from './features/tasks/TaskPage.js'; 
// Importujemy stronę autora
import AuthorPage from './features/author/AuthorPage'; 

// Importujemy stałe ze ścieżkami
import { toTasks, toAuthor } from './routes'; 

// Importujemy ogólny kontener
import { Container } from "./common/Container/index.js";

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
            <TaskListPage /> 
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

// Definicja stylu Linka na dole pliku:
export const Link = styled(NavLink)`
  text-decoration: none;
  color: ${({ theme }) => theme.color.teal};

  &.active {
    font-weight: bold;
  }

  &:hover {
    filter: brightness(110%);
  }
`;