// src/features/tasks/TasksList.js

import React from "react";
import { useSelector } from "react-redux";
import { selectTasks, selectHideDone } from "./tasksSlice";
import { List, Item, Content, Button, Span } from "./styled";
import { Link } from "react-router-dom";
import { toTask } from "../../routes";

// Importujemy stałą, którą właśnie stworzyłaś
import searchQueryParamName from "./searchQueryParamName"; 
// Musimy też zaimportować funkcję do odczytu query z paska adresu
import useQueryParameter from "../../useQueryParameter"; 

const TasksList = () => {
    const tasks = useSelector(selectTasks);
    const hideDone = useSelector(selectHideDone);
    
    // Teraz to zadziała, bo stworzyłaś searchQueryParamName.js
    const query = useQueryParameter(searchQueryParamName);

    // Ostateczne filtrowanie zadań, jeśli używamy wyszukiwania:
    const filteredTasks = tasks.filter(task => 
        task.content.toUpperCase().includes(query?.toUpperCase() || "")
    );

    return (
        <List>
            {/* Iterujemy po przefiltrowanej liście zadań */}
            {filteredTasks.map(task => (
                <Item
                    key={task.id}
                    hidden={task.done && hideDone}
                >
                    <Button
                        toggleDone
                        onClick={() => {}} // TODO: dispatch(toggleTaskDone(task.id))
                    >
                        {task.done ? "✓" : ""}
                    </Button>
                    <Content done={task.done}>
                        {task.content}
                        {/* Wyróżnianie szukanej frazy (opcjonalne) */}
                        {query && (
                             <mark>{query}</mark>
                        )}
                    </Content>
                    <Span>
                        <Button
                            remove
                            onClick={() => {}} // TODO: dispatch(removeTask(task.id))
                        >
                            🗑️
                        </Button>
                        <Link to={toTask({ id: task.id })}>
                            <Button>
                                Edytuj
                            </Button>
                        </Link>
                    </Span>
                </Item>
            ))}
        </List>
    );
};

export default TasksList;