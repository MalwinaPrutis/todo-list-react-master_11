import { useState, useRef, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../features/tasks/TasksSlice";
import { StyledForm, Button, Input } from "./styled";

let nextId = 1;

const Form = () => {
    const [newTaskContent, setNewTaskContent] = useState("");
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    useEffect(() => {
        inputRef.current.focus();
    }, []);

    const onFormSubmit = (event) => {
        event.preventDefault();
        const trimmedContent = newTaskContent.trim();

        if (!trimmedContent) {
            setNewTaskContent("");
            inputRef.current.focus();
            return;
        }

        dispatch(addTask({
            id: nextId++,
            content: trimmedContent,
            done: false
        }));

        setNewTaskContent("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                placeholder="Co jest do zrobienia?"
                onChange={({ target }) => setNewTaskContent(target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    );
};

export default Form;