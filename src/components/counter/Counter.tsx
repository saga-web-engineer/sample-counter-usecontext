import type { FC } from 'react';

import { CounterButton } from './CounterButton';
import { CounterCount } from './CounterCount';

export const Counter: FC = () => {
  return (
    <>
      <CounterCount />
      <CounterButton step={1} type="+" />
      <CounterButton step={1} type="-" />
    </>
  );
};
