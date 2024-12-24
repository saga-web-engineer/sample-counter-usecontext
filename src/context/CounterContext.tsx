import { createContext, useContext, type FC } from 'react';

import { defaultCounterReducer, useCounterReducer } from '../components/counter/CounterReducer';

const { state, dispatch } = defaultCounterReducer;

const CounterContext = createContext(state);
const CounterDispatchContext = createContext(dispatch);

export const CounterProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
  const { state, dispatch } = useCounterReducer();

  return (
    <CounterContext.Provider value={state}>
      <CounterDispatchContext.Provider value={dispatch}>
        {children}
      </CounterDispatchContext.Provider>
    </CounterContext.Provider>
  );
};

export const useCounter = () => useContext(CounterContext);
export const useCounterDispatch = () => useContext(CounterDispatchContext);
