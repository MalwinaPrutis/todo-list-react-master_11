// src/common/Buttons/index.js

import React from "react";
import { useSelector, useDispatch } from "react-redux";
// Ostateczna, poprawna ścieżka do TasksSlice (TasksSlice z dużą literą T i S)
import {
  selectAreTasksEmpty,
  selectIsEveryTaskDone,
  toggleHideDone,
  setAllDone,
} from "../../features/tasks/TasksSlice"; 
import { Wrapper, Button } from "./styled";

const Buttons = () => {
  const areTasksEmpty = useSelector(selectAreTasksEmpty);
  const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
  const dispatch = useDispatch();

  return (
    <Wrapper>
      {!areTasksEmpty && (
        <>
          <Button onClick={() => dispatch(toggleHideDone())}>
            Ukryj ukończone
          </Button>
          <Button onClick={() => dispatch(setAllDone())} disabled={isEveryTaskDone}>
            Ukończ wszystkie
          </Button>
        </>
      )}
    </Wrapper>
  );
};

export default Buttons;