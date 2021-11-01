import { useDispatch, useSelector } from 'react-redux';
import { decrement, increment } from '../redux/ducks/counter';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.count);
  return (
    <div className="row mx-0 text-center">
      <p className="lead mb-1">Count: {counter}</p>
      <div>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        <button
          type="button"
          className="btn btn-secondary mx-2"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default Counter;
