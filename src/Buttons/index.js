import { useSelector, useDispatch } from "react-redux";
import {
    selectAreTasksEmpty,
    selectHideDone,
    selectIsEveryTaskDone,
} from "../tasksSlice";
import { toggleHideDone, setAllDone } from "../tasksSlice";
import { Wrapper, Button } from "./styled";

const Buttons = () => {
    const dispatch = useDispatch();
    const areTasksEmpty = useSelector(selectAreTasksEmpty);
    const hideDone = useSelector(selectHideDone);
    const isEveryTaskDone = useSelector(selectIsEveryTaskDone);

    return (
        <Wrapper>
            {!areTasksEmpty && (
                <>
                    <Button onClick={() => dispatch(toggleHideDone())}>
                        {hideDone ? "Pokaż ukończone" : "Ukryj ukończone"}
                    </Button>
                    <Button
                        onClick={() => dispatch(setAllDone())}
                        disabled={isEveryTaskDone}
                    >
                        Ukończ wszystkie
                    </Button>
                </>
            )}
        </Wrapper>
    );
};

export default Buttons;