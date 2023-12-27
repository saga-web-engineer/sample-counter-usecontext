import { FC } from 'react';

import { CounterButton } from './CounterButton';
import { CounterCount } from './CounterCount';

export const Counter: FC = () => {
  return (
    <>
      <CounterCount />
      <div className="inner">
        <CounterButton step={1} type="+" />
        <CounterButton step={1} type="-" />
      </div>
    </>
  );
};
