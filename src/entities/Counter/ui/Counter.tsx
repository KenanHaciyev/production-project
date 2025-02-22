import { Button } from 'shared/ui/Button/button';
import { useDispatch, useSelector } from 'react-redux';
import { counterActions } from 'entities/Counter/model/slice/counterSlice';
import { getCounter } from 'entities/Counter/model/selectors/getCounter/getCounter';

export const Counter = () => {
    const dispatch = useDispatch();
    const counterValue = useSelector(getCounter);
    const increment = () => {
        dispatch(counterActions.increment());
    };
    const decrement = () => {
        dispatch(counterActions.decrement());
    };

    return (
        <>
            <h1>{counterValue}</h1>
            <Button onClick={increment}>increment</Button>
            <Button onClick={decrement}>decrement</Button>
        </>
    );
};
