import { FC } from 'react';

import { useCounter } from '../../context/CounterContext';

export const CounterCount: FC = () => {
  const state = useCounter();

  return <div>{state}</div>;
};
