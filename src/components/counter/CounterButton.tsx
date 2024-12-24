import type { FC } from 'react';

import { useCounterDispatch } from '../../context/CounterContext';

type Props = {
  type: '+' | '-';
  step: number;
};

export const CounterButton: FC<Props> = ({ type, step }) => {
  const dispatch = useCounterDispatch();
  const clickHandler = () => dispatch({ type, step });

  return (
    <button onClick={clickHandler}>
      {type}
      {step}
    </button>
  );
};
